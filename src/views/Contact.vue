<template>
	<div class="content-admin"></div>
	<div class="content-cutome">
		<el-form
			:model="ruleform"
			ref="formRef"
			label-width="auto"
			:rules="rules"
		>
			<el-form-item label="貴姓大名" prop="username">
				<el-input v-model="ruleform.username" />
			</el-form-item>

			<el-form-item label="手機或電話號碼" prop="phone">
				<el-input v-model="ruleform.phone" />
			</el-form-item>
			<el-form-item label="電子郵件" prop="email">
				<el-input v-model="ruleform.email" />
			</el-form-item>
			<el-form-item label="地址" prop="address">
				<el-input v-model="ruleform.address" />
			</el-form-item>

			<el-form-item>
				<el-col :span="12">
					<el-form-item label="可連絡時間" prop="date1">
						<el-date-picker
							v-model="ruleform.date1"
							type="date"
							placeholder="Pick a date"
							style="width: 100%"
						/>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="幾點以後聯絡" prop="date2">
						<el-time-picker
							v-model="ruleform.date2"
							placeholder="Pick a time"
							style="width: 100%"
						/>
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item label="另外的要求" prop="desc">
				<el-input v-model="ruleform.desc" type="textarea" />
			</el-form-item>
			<div>
				<el-form-item class="btn-group">
					<el-button class="btn1" type="primary" @click="onSubmit"
						>送出</el-button
					>
					<el-button class="btn2" @click="resetForm(formRef)"
						>全部重置</el-button
					>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
	type FormRules,
	type FormInstance,
	ElNotification,
} from "element-plus";

interface RuleForm {
	username: string;
	phone: string;
	email: string;
	address: string;
	date1: string;
	date2: string;
	desc: string;
}

const ruleform: RuleForm = reactive({
	username: "",
	phone: "",
	email: "",
	address: "",
	date1: "",
	date2: "",
	desc: "",
});

const rules = reactive<FormRules>({
	username: [
		{ required: true, message: "please enter username", trigger: "blur" },
	],
	phone: [
		{
			required: true,
			type: "number",
			message: "please enter phone",
			trigger: "blur",
		},
	],
	email: [
		{
			required: false,
			type: "email",
			trigger: "blur",
		},
	],
	address: [{ required: false }],
	date1: [{ required: false }],
	date2: [{ required: false }],
	desc: [{ required: false }],
});

const onSubmit = () => {
	formRef.value?.validate((valid: boolean) => {
		if (valid) {
			console.log(ruleform);
		} else {
			console.log("error submit!!");
			ElNotification({
				title: "Error",
				message: "還有資料未填寫",
				type: "error",
			});
		}
	});
};

const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};

const formRef = ref<FormInstance>();
</script>

<style scoped lang="less">
.content-cutome {
	width: 100%;
}
.el-descriptions {
	margin-top: 20px;
}
.btn-group {
	position: relative;
	margin-top: 50px;
	.btn1 {
		position: absolute;
		right: 100px;
	}
	.btn2 {
		position: absolute;
		right: 0px;
	}
}
</style>
