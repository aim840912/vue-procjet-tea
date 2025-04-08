<template>
	<div class="header">
		<div class="title">
			<p>豪德</p>
		</div>
		<div class="personal" @click="drawer = true">
			<el-badge :is-dot="info > 0" class="item">
				<el-icon><ShoppingCart /></el-icon>
			</el-badge>
			<el-avatar
				src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
				class="ml mr"
			/>
			<el-dropdown @command="handleCommand">
				<span class="el-dropdown-link">
					歡迎 {{ username }}
					<el-icon class="el-icon--right">
						<arrow-down />
					</el-icon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item icon="User" command="user"
							>個人中心</el-dropdown-item
						>
						<el-dropdown-item icon="SwitchButton" command="logout"
							>退出登入</el-dropdown-item
						>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
	<el-drawer v-model="drawer" title="購物車">
		商品陣列
		<div
			class="card-container mt"
			v-for="item in carts"
			:key="item.orderNo"
		>
			<el-card class="card">
				<p class="info-label">商品編號 : {{ item }}</p>
				<el-button :icon="Delete" text @click="deleteFromCart(item)" />
			</el-card>
		</div>
	</el-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useUserStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { Delete } from "@element-plus/icons-vue";
const router = useRouter();
const userStore = useUserStore();
const { username, carts } = storeToRefs(userStore);
const info = ref(carts.value);

watch(
	() => info.value,
	(newVal) => {
		if (newVal.length > 0) {
			info.value = newVal.length;
		} else {
			info.value = 0;
		}
	}
);

const handleCommand = (command: string) => {
	if (command == "user") {
		router.push("/personal");
	} else {
		userStore.logout();
		router.push("/login");
	}
};

const drawer = ref<boolean>(false);

const deleteFromCart = (orderNo: string) => {
	userStore.removeProduct(orderNo);
};
</script>

<style lang="less" scoped>
.header {
	background-color: white;
	height: 60px;
	padding: 0 20px;
	.title {
		font-size: 40px;
		color: #333;
		float: left;
		display: flex;
		align-items: center;
		p {
			margin-top: 10px;
		}
	}
	.personal {
		float: right;
		display: flex;
		height: 60px;
		align-items: center;
		.item {
			margin-top: 10px;
		}
	}
}
.card-container {
	width: 100%;
	.card {
		position: relative;
		p {
			display: inline;
		}
		.el-button {
			position: absolute;
			// top: 50%; /* Moves button to the middle vertically */
			right: 1px;
			/* Moves button to the middle vertically */
		}
	}
}
</style>
