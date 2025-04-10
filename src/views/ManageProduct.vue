<template>
	<div class="cards">
		<el-card class="mt card" v-for="item in products" :key="item" @click="">
			<div class="card-image-container">
				<p class="info-label">產品編號 : {{ item }}</p>
			</div>

			<div class="button-container mb">
				<el-button
					class="edit-button"
					type="primary"
					size="small"
					@click=""
				>
					編輯產品</el-button
				>
				<el-button
					class="edit-button"
					type="danger"
					size="small"
					@click=""
				>
					刪除產品</el-button
				>
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useUserStore } from "@/store/auth";
const userStore = useUserStore();

const { products } = storeToRefs(userStore);
</script>

<style scoped>
.card-image-container {
	float: left;
}
.button-container {
	float: right;

	display: flex;
}
</style>
