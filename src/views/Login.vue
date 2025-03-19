<template>
	<div class="bg">
		<div class="login">
			<h1 class="title">豪德</h1>
			<el-form :model="ruleForm" ref="formRef" :rules="rules">
				<el-form-item>
					<el-input
						v-model="ruleForm.username"
						placeholder="請輸入信箱或手機號碼"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-input
						v-model="ruleForm.password"
						placeholder="請輸入密碼"
						type="password"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						class="btn"
						type="primary"
						size="default"
						@click="handleLogin"
						>Login</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormRules, FormInstance } from "element-plus";
import { useUserStore } from "@/store/auth";
import { useRouter } from "vue-router";
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
		{ required: true, message: "please enter username", trigger: "blur" },
		{ min: 3, trigger: "blur" },
	],
	password: [
		{ required: true, message: "please enter password", trigger: "blur" },
	],
});

const userStore = useUserStore();
const formRef = ref<FormInstance>();
const router = useRouter();

const handleLogin = () => {
	formRef.value?.validate(async (valid: boolean) => {
		if (valid) {
			await userStore.login(ruleForm);
			router.push("/");
		}
	});
};
</script>

<style scoped lang="less">
.bg {
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	justify-items: center;
	align-content: center;
	.title {
		padding: 20px;
	}
	.login {
		left: 10%;
		.btn {
			width: 100%;
		}
	}
}
</style>
