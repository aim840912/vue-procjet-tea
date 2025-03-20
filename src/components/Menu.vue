<template>
	<div class="logo"><h1>豪德</h1></div>
	<el-menu
		active-text-color="#ffd04b"
		class="el-menu-vertical-demo"
		default-active="1"
		:router="true"
	>
		<el-menu-item index="/dashboard">
			<template #title>
				<el-icon>
					<location />
				</el-icon>
				<span>首頁</span>
			</template>
		</el-menu-item>
		<el-sub-menu>
			<template #title>
				<el-icon><document /></el-icon>
				<span>商品專區</span>
			</template>
			<el-menu-item index="/shop">全部商品</el-menu-item>
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
		<el-menu-item index="3" disabled>
			<el-icon>
				<document />
			</el-icon>
			<span>聯絡專區</span>
		</el-menu-item>
		<el-menu-item index="/personal">
			<el-icon>
				<setting />
			</el-icon>
			<span>個人中心</span>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts"></script>

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
