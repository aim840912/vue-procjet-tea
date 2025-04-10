<template>
	<el-card>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input
					placeholder="請輸入訂單名字"
					v-model="searchParams.title"
					@change="handleSearch(searchParams.title)"
				/>
			</el-col>
			<el-col :span="6">
				<el-select
					placeholder="訂單種類"
					v-model="searchParams.category"
				>
					<el-option label="全部" value=""></el-option>
					<el-option label="茶類" value="茶類"></el-option>
					<el-option label="咖啡類" value="咖啡類"></el-option>
					<el-option label="果園" value="果園"></el-option>
				</el-select>
			</el-col>
			<el-col :span="6">
				<el-input
					placeholder="訂單金額"
					v-model="searchParams.price"
					type="number"
				/>
			</el-col>
			<el-col :span="6">
				<el-button type="primary" @click="loadData">查詢</el-button>
				<el-button @click="handleReset">重置</el-button>
			</el-col>
		</el-row>
	</el-card>
	<div class="cards" v-loading="loading">
		<el-card
			class="mt card"
			v-for="item in dataList"
			:key="item"
			@click="handleClick(item.orderNo)"
		>
			<div>
				<el-image class="card-image" :src="item.image" fit="cover" />
			</div>
			<div>
				<p class="info-label">{{ item.title }}</p>
			</div>
			<div class="div-price">
				<p class="mt price">${{ item.price }}</p>
			</div>
			<div>
				<p>category : {{ item.category }}</p>
			</div>
		</el-card>
	</div>
	<div>
		<el-pagination
			class="mt mb pagnation"
			v-model:current-page="pageInfo.page"
			v-model:page-size="pageInfo.pageSize"
			:page-sizes="[10, 20, 30, 40]"
			layout="sizes, prev, pager, next, jumper,total"
			:total="totals"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			background
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHttp } from "@/hooks/useHttp";
import { type SelectionListType, type SearchType } from "@/types/product";
import router from "@/router";
import { useRoute } from "vue-router";

import { useTabsStore } from "@/store/tabs.ts";
const tabsStore = useTabsStore();
const { addTab } = tabsStore;
const route = useRoute();

const category = ref<string>(route.query.category as string);

category.value = category.value === undefined ? "" : category.value;

const searchParams = ref<SearchType>({
	orderNo: "",
	price: 0,
	category: category.value,
	title: "",
	content: "",
	image: "",
});

const {
	dataList,
	loading,
	totals,
	pageInfo,
	loadData,
	handleSizeChange,
	handleCurrentChange,
	resetPagination,
	handleSearch,
} = useHttp<SelectionListType>("/product", searchParams);

const date = ref();

const handleReset = () => {
	date.value = "";
	searchParams.value = {
		orderNo: "",
		price: 0,
		category: "",
		title: "",
		content: "",
		image: "",
	};
	resetPagination();
};

const handleClick = (orderNo: string) => {
	router.push({
		name: "detail",
		query: { orderNo },
	});

	addTab(orderNo, `/product/detail?orderNo=${orderNo}`, "Lightning");
};
</script>

<style lang="less" scoped>
.pagnation {
	justify-content: center;
}
.cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: stretch;
	align-items: center;
	margin-top: 20px;
}
.card {
	width: 240px;
	margin: 10px;
	.card-image {
		width: 100%;
		height: 150px;
	}
	.info-label {
		color: rgb(136, 136, 255);
		font-weight: 500;
		font-size: 20px;
	}

	.price {
		color: rgb(230, 95, 95);
		font-weight: 800;
		font-size: 20px;
	}
}

.card:hover {
	background-color: #6bdf84;
}
</style>
