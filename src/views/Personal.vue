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
				<el-row :gutter="20">
					<el-col :span="16">
						<StepForm
							:steps="steps"
							:form1="form1"
							:form2="form2"
							@handle-submit="handleSubmit"
						>
							<template #step-1>
								<el-form
									:model="formData.basicInfo"
									ref="form1"
								>
									<el-form-item label="姓名">
										<el-input
											v-model="formData.basicInfo.name"
										/>
									</el-form-item>
									<el-form-item label="電話">
										<el-input
											v-model="formData.basicInfo.tel"
										/>
									</el-form-item>
									<el-form-item label="地址">
										<el-input
											v-model="formData.basicInfo.address"
										/>
									</el-form-item>
								</el-form>
							</template>
							<template #step-2>
								<el-form :model="formData.job" ref="form2">
									<el-select
										placeholder="選擇聯絡方式"
										v-model="formData.job.status"
									>
										<el-option label="手機" value="1">
										</el-option>
										<el-option label="郵件" value="2">
										</el-option>
										<el-option label="家用電話" value="3">
										</el-option>
										<el-option label="簡訊" value="4">
										</el-option>
									</el-select>
								</el-form>
							</template>
						</StepForm>
					</el-col>
					<el-col :span="8">
						<div
							style="
								display: flex;
								align-items: center;
								flex-direction: column;
								justify-content: space-around;
							"
						>
							<h1 style="margin-bottom: 40px" class="mt">
								资料完善度
							</h1>
							<el-progress type="circle" :percentage="85" />
						</div>
					</el-col>
				</el-row>
			</el-card>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type FormInstance } from "element-plus";
import StepForm from "@/views/StepForm.vue";

const value = ref(new Date());
const steps = [{ title: "基本信息" }, { title: "在職信息" }];
const form1 = ref<FormInstance>();
const form2 = ref<FormInstance>();
const formData = ref({
	basicInfo: {
		name: "",
		address: "",
		tel: "",
	},
	job: {
		status: "",
	},
});

const handleSubmit = () => {
	console.log("表單數據", formData.value);
};
</script>

<style scoped lang="less"></style>
