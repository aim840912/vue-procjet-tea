<template>
	<el-card>
		<el-select
			v-model="value"
			style="width: 300px"
			placeholder="選擇"
			filterable
		>
			<el-option> </el-option>
		</el-select>
	</el-card>

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

	<el-card class="mt">
		<el-row :gutter="20">
			<el-col :span="6" v-for="item in options" :key="item">
				<div class="item">
					<el-image
						style="width: 100px; height: 100px"
						:src="fruit"
						fit="cover"
					/>
					<div class="info">
						<h3>{{ item.label }}</h3>
						<hr class="mb" />
						<p>content1</p>
						<p>content2</p>
						<p>content3</p>
						<p>content4</p>
					</div>
				</div>
				<div class="btn">
					<div class="divder">
						<div>
							<p class="fl ml"></p>
							<div>
								<el-button size="small" @click=""
									>查看</el-button
								>
								<el-button size="small" @click=""
									>添加</el-button
								>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import fruit from "@/assets/picture/fruit.jpg";

const value = ref<string>("");
const options = ref<any>([
	{ value: 1, label: "酒" },
	{ value: 2, label: "茶" },
	{ value: 3, label: "水果" },
	{ value: 4, label: "果園" },
]); //下拉菜單數據

const radio = ref<number>(0);

function checkCount(num: number) {
	return num;
}

const handleChange = () => {};
</script>

<style lang="less" scoped>
.item {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: rgb(247, 254, 247);
	padding: 20px;
	border-radius: 10px 10px 0 0;
	margin-top: 20px;

	.info {
		color: #999;
		margin-left: 30px;
		line-height: 26px;
		margin-top: -10px;
	}
}

.btn {
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: #f7fbfe;

	.divder {
		background-color: #f4f4f4;
		height: 2px;
		width: 95%;
		margin: auto;
	}
}
</style>
