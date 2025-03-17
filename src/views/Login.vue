<template>
	<el-form :model="ruleForm" ref="formRef" :rules="rules">
		<el-form-item label="">
			<el-input v-model="ruleForm.username"></el-input>
		</el-form-item>
		<el-form-item label="">
			<el-input v-model="ruleForm.password"></el-input>
		</el-form-item>
		<el-form-item label="">
			<el-button type="primary" size="default" @click="handleLogin"
				>Login</el-button
			>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormRules, FormInstance } from "element-plus";
interface RuleForm {
	username: string;
	password: string;
}

const ruleForm: RuleForm = reactive({
	username: "",
	password: "",
});

const rules = reactive<FormRules<RuleForm>>({
	username: [
		{ require: true, message: "please enter username", trigger: "blur" },
	],
	password: [
		{ require: true, message: "please enter password", trigger: "blur" },
	],
});

const formRef = ref<FormInstance>();

const handleLogin = () => {
	// formRef.value?.validate(async (valid: boolean) => {
	// 	if (valid) {
	// 	}
	// });
	console.log("login");
};
</script>

<style scoped lang="less"></style>
