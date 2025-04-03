<template>
	<el-container>
		<el-header><TopHeader /> </el-header>
		<el-container>
			<el-aside width="150px">
				<Menu></Menu>
			</el-aside>
			<el-main> <TabsLayout /></el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import TopHeader from "@/components/TopHeader.vue";
import TabsLayout from "@/layouts/TabsLayout.vue";
</script>

<style lang="less" scoped>
.el-aside {
	height: 100vh;
	background-color: rgba(255, 255, 255, 0);
	// box-shadow: 10px 0 8px -2px rgba(0, 0, 0, 0.2);
}
.el-header {
	padding: 0 !important;
}

.el-main {
	height: 100vh;
	overflow: auto;
}
</style>
