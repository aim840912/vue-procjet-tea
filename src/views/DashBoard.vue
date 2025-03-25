<template>
	<!-- <div class="demo-image__lazy">
		<el-image v-for="url in urls" :key="url" :src="url" lazy />
	</div> -->
	<ul v-infinite-scroll="load">
		<li v-for="i in count" :key="i">
			<div class="demo-image__lazy mt">
				<el-image :src="urls[i % urls.length]" :lazy="true" />
			</div>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import fruit1 from "@/assets/picture/fruit.jpg";
import fruit2 from "@/assets/picture/fruit2.jpg";
import tea1 from "@/assets/picture/tea.jpg";
import tea2 from "@/assets/picture/tea2.jpg";
import tea3 from "@/assets/picture/tea3.jpg";
import teabag from "@/assets/picture/teabag.jpg";
import teaposition from "@/assets/picture/teaposition.jpg";
import { ref } from "vue";
const urls = [fruit1, fruit2, tea1, tea2, tea3, teabag, teaposition];
const count = ref(0);
const load = () => {
	count.value += 1;
};
</script>

<style scoped>
.demo-image__lazy {
	/* height: 400px; */
	overflow-y: auto;
}
.demo-image__lazy .el-image {
	display: block;
	min-height: 200px;
	margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
	margin-bottom: 0;
}
</style>
