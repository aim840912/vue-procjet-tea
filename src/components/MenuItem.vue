<template>
	<el-sub-menu v-if="item.children" :index="item.url">
		<template #title>
			<el-icon>
				<component :is="item.icon"></component>
			</el-icon>
			<span>{{ item.name }}</span>
		</template>
		<my-menu
			v-for="child in item.children"
			:key="child.url"
			:item="child"
		></my-menu>
	</el-sub-menu>
	<el-menu-item
		v-else
		:index="item.url"
		@click="add(item.name, item.url, item.icon)"
		active-text-color="#ffd04b"
		class="el-menu-vertical-demo"
		default-active="1"
		:router="true"
		v-show="!(item.name == '產品詳情' || item.name == '產品管理')"
	>
		<el-icon>
			<component :is="item.icon"></component>
		</el-icon>
		<span>{{ item.name }}</span>
	</el-menu-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { type MenuItem as MenuItemType } from "@/types/user";
import { useTabsStore } from "@/store/tabs";
export default defineComponent({
	name: "MyMenu",
	props: {
		item: {
			type: Object as PropType<MenuItemType>,
			required: true,
		},
	},
	setup() {
		const tabsStore = useTabsStore();
		const { addTab, setCurrentTab } = tabsStore;
		const add = (name: string, url: string, icon: string) => {
			addTab(name, url, icon);
			setCurrentTab(name, url);
		};
		return { add };
	},
});
</script>

<style scoped lang="less">
.is-active {
	background-color: rgb(123, 233, 80);
	color: #fff !important;
	div {
		span {
			color: #fff;
		}
	}
}
.el-menu-item:hover {
	background-color: rgb(76, 172, 38) !important;
	color: #fff !important ;
}
::v-deep .el-sub-menu__title:hover {
	background-color: rgb(76, 172, 38) !important;
	color: #fff !important ;
}
</style>
