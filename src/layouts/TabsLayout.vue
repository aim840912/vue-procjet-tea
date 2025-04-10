<template>
	<el-tabs
		v-model="currentTab.name"
		class="demo-tabs"
		@tab-click="handleClick"
		type="card"
		closable
		@tab-remove="remove"
	>
		<el-tab-pane
			v-for="item in tabs"
			:key="item.name"
			:label="item.name"
			:name="item.name"
		>
			<template #label>
				<span class="custom-tabs-label">
					<el-icon>
						<component :is="item.icon"></component>
					</el-icon>
					<span>&nbsp;{{ item.name }}</span>
				</span>
			</template>
		</el-tab-pane>
	</el-tabs>
	<RouterView v-slot="{ Component }">
		<KeepAlive>
			<component
				:is="Component"
				:key="$route.name"
				v-if="$route.meta.keepAlive"
			></component>
		</KeepAlive>
		<component
			:is="Component"
			:key="$route.name"
			v-if="!$route.meta.keepAlive"
		></component>
	</RouterView>

	<!-- <RouterView/> -->
</template>
<script setup lang="ts">
import { useTabsStore } from "@/store/tabs.ts";
import { useUserStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
const tabsStore = useTabsStore();
const userStore = useUserStore();
const { menu } = storeToRefs(userStore);
const router = useRouter();
const route = useRoute();

const { tabs, currentTab } = storeToRefs(tabsStore);
const { setCurrentTab, addTab, removeTab } = tabsStore;

function findObjectByUrl(arr: any[], url: string) {
	for (const item of arr) {
		if (item.url === url) {
			return item;
		}
	}
	return null;
}
const { name, url, icon } =
	findObjectByUrl(menu.value, route.path) == null
		? { name: "所有產品", url: "/product/all", icon: "Lightning" }
		: findObjectByUrl(menu.value, route.path);
addTab(name, url, icon);
setCurrentTab(name, url);

const handleClick = ({ index }: { index: number }) => {
	router.push(tabs.value[index].url);
	setCurrentTab(tabs.value[index].name, tabs.value[index].url);
};
const remove = (TabPaneName: string) => {
	removeTab(TabPaneName);
	router.push(currentTab.value.url);
};
</script>
<style lang="less" scoped>
.demo-tabs {
	::v-deep .is-active {
		background-color: rgb(76, 172, 38) !important;
		color: #fff !important;
	}
}
</style>
