<template>
	<!-- <el-card>
		<el-select
			v-model="value"
			style="width: 300px"
			placeholder="選擇"
			filterable
		>
			<el-option :value="1"> </el-option>
		</el-select>
	</el-card> -->

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
			<div class="info">
				<h3>{{ item.label }}</h3>
				<hr class="mb" />
			</div>
			<div>
				<el-image class="card-image" :src="fruit" fit="cover" />
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import fruit from "@/assets/picture/fruit.jpg";

const options = ref<any>([
	{ value: 1, label: "酒" },
	{ value: 2, label: "茶" },
	{ value: 3, label: "水果" },
	{ value: 4, label: "果園" },
	{ value: 6, label: "果園" },
	{ value: 7, label: "果園" },
	{ value: 8, label: "果園" },
	{ value: 9, label: "果園" },
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
	width: 150px;
	margin: 10px;
	.card-image {
		width: 100%;
		height: 10vh;
	}
}

.btn {
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: #6bdf84;

	.divder {
		background-color: #f4f4f4;
		height: 2px;
		width: 100%;
		margin: auto;
		justify-items: center;
	}
}
</style>
