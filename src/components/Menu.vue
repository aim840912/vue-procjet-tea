<template>
	<el-menu
		active-text-color="#ffd04b"
		class="el-menu-vertical-demo"
		default-active="1"
		:router="true"
	>
		<el-menu-item
			index="/dashboard"
			@click="add('dashboard', '/dashboard', 'location')"
		>
			<template #title>
				<el-icon>
					<location />
				</el-icon>
				<span>首頁</span>
			</template>
		</el-menu-item>
		<el-sub-menu
			index="/product"
			@click="add('product', '/product', 'location')"
		>
			<template #title>
				<el-icon><document /></el-icon>
				<span>商品專區</span>
			</template>
			<el-menu-item index="/product">全部商品</el-menu-item>
			<el-menu-item index="2-1">果園</el-menu-item>
			<el-sub-menu index="2-2">
				<template #title>茶</template>
				<el-menu-item index="2-2-1">茶葉</el-menu-item>
				<el-menu-item index="2-2-2">茶包</el-menu-item>
			</el-sub-menu>
			<el-sub-menu index="2-3">
				<template #title>咖啡</template>
				<el-menu-item index="2-3-1">咖啡包</el-menu-item>
				<el-menu-item index="2-3-2">咖啡豆</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-sub-menu
			@click="add('appearmap', '/appearmap', 'location')"
			index="/appearmap"
		>
			<template #title>
				<el-icon><document /></el-icon>
				<span>出現地點</span>
			</template>
			<el-menu-item index="/appearmap">全部地點</el-menu-item>
			<el-menu-item index="3-1">定點</el-menu-item>
			<el-sub-menu index="3-2">
				<template #title>擺攤</template>
				<el-menu-item index="3-2-1">嘉義</el-menu-item>
				<el-menu-item index="3-2-2">台南</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>

		<el-menu-item
			@click="add('contact', '/contact', 'location')"
			index="/contact"
		>
			<el-icon>
				<document />
			</el-icon>
			<span>聯絡專區</span>
		</el-menu-item>
		<el-menu-item
			@click="add('addproduct', '/addproduct', 'location')"
			index="/addproduct"
		>
			<el-icon>
				<document />
			</el-icon>
			<span>新增產品</span>
		</el-menu-item>
		<el-menu-item
			@click="add('personal', '/personal', 'location')"
			index="/personal"
		>
			<el-icon>
				<setting />
			</el-icon>
			<span>個人中心</span>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
import { useTabsStore } from "@/store/tabs";

const tabsStore = useTabsStore();
const { addTab, setCurrentTab } = tabsStore;
const add = (name: string, url: string, icon: string) => {
	addTab(name, url, icon);
	setCurrentTab(name, url);
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo {
	background-color: rgb(76, 172, 38);
	span {
		color: black;
	}
}
.el-menu-item:hover {
	background-color: rgb(123, 233, 80);
}
.el-sub-menu__title:hover {
	background-color: rgb(123, 233, 80);
}
.is-active {
	background-color: rgb(123, 233, 80);
}
.logo {
	margin: 10px 30px;
	font-size: 30px;
}
</style>
