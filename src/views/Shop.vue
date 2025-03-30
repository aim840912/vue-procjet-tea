<template>
	<div class="cards">
		<el-card class="mt card" v-for="item in dataList" :key="item">
			<div>
				<el-image class="card-image" :src="fruit" fit="cover" />
			</div>
			<div class="info-category">
				<h3 class="info-category-h3">{{ item.category }}</h3>
				<hr />
			</div>
			<div>
				<p class="info-label">{{ item.title }}</p>
			</div>
			<div class="div-info-content">
				<p class="info-content">{{ item.content }}</p>
			</div>
			<div class="div-price">
				<p class="price">$ {{ item.money }}</p>
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import fruit from "@/assets/picture/fruit.jpg";
import { useHttp } from "@/hooks/useHttp";
import { type SelectionListType, type SearchType } from "@/types/shop";

const searchParams = ref<SearchType>({
	orderNo: "",
	startTime: "",
	endTime: "",
	money: "",
	category: "",
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
} = useHttp<SelectionListType>("/productList", searchParams);

const date = ref();

const handleReset = () => {
	date.value = "";
	searchParams.value = {
		orderNo: "",
		startTime: "",
		endTime: "",
		money: "",
		category: "",
		title: "",
		content: "",
		image: "",
	};
	resetPagination();
};

const handleChange = (val: string[]) => {
	searchParams.value.startTime = val[0];
	searchParams.value.endTime = val[1];
};
</script>

<style lang="less" scoped>
.cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: stretch;
	align-items: center;
	margin-top: 20px;
}
.card {
	width: 250px;
	height: 350px;
	margin: 10px;
	.card-image {
		width: 100%;
		height: 20vh;
	}
	.info-category {
		color: rgb(136, 136, 255);
		.info-category-h3 {
			text-align: right;
		}
	}
	.info-label {
		color: rgb(136, 136, 255);
		font-weight: 500;
		font-size: 30px;
	}
	.div-info-content {
		margin-top: 5px;
	}
	.div-price {
		margin-top: 20px;
	}
	.price {
		color: rgb(230, 95, 95);
		font-weight: 500;
		font-size: 30px;
	}
}

.card:hover {
	background-color: #6bdf84;
}
</style>
