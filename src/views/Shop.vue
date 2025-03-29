<template>
	<el-card class="mt">
		<el-radio-group size="large" v-model="radio" @change="handleChange">
			<el-radio-button :label="`全部商品`" :value="0" />
			<el-radio-button :label="`酒類(${checkCount(1)})`" :value="1" />
			<el-radio-button :label="`茶類(${checkCount(2)})`" :value="2" />
			<el-radio-button :label="`水果類(${checkCount(3)})`" :value="3" />
			<el-radio-button :label="`其他類(${checkCount(4)})`" :value="4" />
			<el-radio-button :label="`觀光類(${checkCount(5)})`" :value="5" />
			<el-radio-button :label="`持續新增(${checkCount(6)})`" :value="6" />
		</el-radio-group>
	</el-card>
	<div class="cards">
		<el-card class="mt card" v-for="item in options" :key="item">
			<div>
				<el-image class="card-image" :src="fruit" fit="cover" />
			</div>
			<div class="info-category">
				<h3 class="info-category-h3">{{ item.category }}</h3>
				<hr />
			</div>
			<div>
				<p class="info-label">{{ item.label }}</p>
			</div>
			<div>
				<p class="info-content">{{ item.content }}</p>
			</div>
			<div class="div-price">
				<p class="price">$ {{ item.price }}</p>
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import fruit from "@/assets/picture/fruit.jpg";

const options = ref<any>([
	{ value: 1, price: 20, category: "種類", content: "物品詳情", label: "酒" },
	{ value: 2, price: 20, category: "種類", content: "物品詳情", label: "茶" },
	{
		value: 3,
		price: 20,
		category: "種類",
		content: "物品詳情",
		label: "水果",
	},
	{
		value: 4,
		price: 20,
		category: "種類",
		content: "物品詳情",
		label: "果園",
	},
	{
		value: 6,
		price: 20,
		category: "種類",
		content: "物品詳情",
		label: "果園",
	},
	{
		value: 7,
		price: 20,
		category: "種類",
		content: "物品詳情",
		label: "果園",
	},
	{
		value: 8,
		price: 20,
		category: "種類",
		content: "物品詳情",
		label: "果園",
	},
	{
		value: 9,
		price: 20,
		category: "種類",
		content: "物品詳情",
		label: "果園",
	},
]);

const radio = ref<number>(0);

function checkCount(num: number) {
	return num;
}

const handleChange = () => {};
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
