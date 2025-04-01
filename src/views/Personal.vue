<template>
	<el-row :gutter="20">
		<el-col :span="12">
			<el-card>
				<el-descriptions
					direction="vertical"
					border
					style="margin-top: 20px"
				>
					<el-descriptions-item
						:rowspan="2"
						:width="140"
						label="個人頭像"
						align="center"
					>
						<el-image
							style="width: 100px; height: 100px"
							src="https://api.dicebear.com/7.x/miniavs/svg?seed=9"
						/>
					</el-descriptions-item>
					<el-descriptions-item label="姓名">田</el-descriptions-item>
					<el-descriptions-item label="電話"
						>0975666666</el-descriptions-item
					>
					<el-descriptions-item label="地址"
						>台灣嘉義市</el-descriptions-item
					>
					<el-descriptions-item label="個人標籤">
						<el-tag type="primary" class="mr">認真</el-tag>
						<el-tag type="success" class="mr">工作狂</el-tag>
						<el-tag type="info" class="mr">與人和善</el-tag>
						<el-tag type="warning" class="mr">代碼潔癖</el-tag>
					</el-descriptions-item>
				</el-descriptions>
			</el-card>
			<el-card class="mt">
				<el-calendar v-model="value" />
			</el-card>
		</el-col>
		<el-col :span="12">
			<el-card>
				<template #header>
					<div class="card-header">
						<span>完善個人資料</span>
					</div>
				</template>

				<el-form class="form">
					<el-form :model="formData.basicInfo" ref="form">
						<el-form-item label="姓名">
							<el-input v-model="formData.basicInfo.name" />
						</el-form-item>
						<el-form-item label="電話">
							<el-input v-model="formData.basicInfo.phone" />
						</el-form-item>
						<el-form-item label="郵件">
							<el-input v-model="formData.basicInfo.email" />
						</el-form-item>
						<el-form-item label="地址">
							<el-input v-model="formData.basicInfo.address" />
						</el-form-item>
					</el-form>
					<el-form-item>
						<el-checkbox-group v-model="formData.preferContact">
							<el-checkbox label="手機" value="1"> </el-checkbox>
							<el-checkbox label="郵件" value="2"> </el-checkbox>
							<el-checkbox
								label="家用電話"
								value="3"
							></el-checkbox>
							<el-checkbox label="簡訊" value="4"> </el-checkbox>
						</el-checkbox-group>
					</el-form-item>

					<el-button class="btn mb" type="primary" @click="onSubmit"
						>確定更改</el-button
					>
				</el-form>
			</el-card>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type FormInstance } from "element-plus";

const value = ref(new Date());
const form = ref<FormInstance>();
const formData = ref({
	basicInfo: {
		name: "",
		address: "",
		phone: "",
		email: "",
	},
	preferContact: [],
});

const onSubmit = () => {
	console.log("表單數據", formData.value);
};
</script>

<style scoped lang="less">
.form {
	.btn {
		float: right;
	}
}
</style>
