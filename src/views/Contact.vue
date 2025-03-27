<template>
	<div class="content-admin"></div>
	<div class="content-cutome">
		<el-form :model="ruleform" label-width="auto" :rules="rules">
			<el-form-item label="貴姓大名" prop="username">
				<el-input v-model="ruleform.username" />
			</el-form-item>

			<el-form-item label="手機或電話號碼">
				<el-input v-model="ruleform.phone" />
			</el-form-item>
			<el-form-item label="電子郵件">
				<el-input v-model="ruleform.email" />
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model="ruleform.address" />
			</el-form-item>

			<el-form-item label="可連絡時間">
				<el-col :span="11">
					<el-date-picker
						v-model="ruleform.date1"
						type="date"
						placeholder="Pick a date"
						style="width: 100%"
					/>
				</el-col>

				<el-col :span="11">
					<el-time-picker
						v-model="ruleform.date2"
						placeholder="Pick a time"
						style="width: 100%"
					/>
				</el-col>
			</el-form-item>
			<el-form-item label="另外的要求">
				<el-input v-model="ruleform.desc" type="textarea" />
			</el-form-item>
			<div>
				<el-form-item class="btn-group">
					<el-button class="btn1" type="primary" @click="onSubmit"
						>送出</el-button
					>
					<el-button class="btn2" @click="onReset"
						>全部重置</el-button
					>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { FormRules } from "element-plus";

const initialForm = {
	username: "",
	phone: "",
	email: "",
	address: "",
	date1: "",
	date2: "",
	desc: "",
};

const ruleform = reactive({ ...initialForm });

const rules = reactive<FormRules>({
	username: [
		{ required: true, message: "please enter username", trigger: "blur" },
	],
});

const onSubmit = () => {
	console.log("contact submit", ruleform);
};

const onReset = () => {
	Object.assign(ruleform, initialForm);
};
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
