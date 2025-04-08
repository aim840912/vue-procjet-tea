<template>
	<el-dialog :model-value="visible" title="Tips" width="500"
		><div>
			<el-form :model="formData" @handle-submit="handleSubmit">
				<el-form-item label="名稱">
					<el-input v-model="formData.name" />
				</el-form-item>
				<el-form-item label="價格">
					<el-input v-model="formData.price" />
				</el-form-item>

				<el-form-item label="介紹">
					<el-input v-model="formData.content" type="textarea" />
				</el-form-item>

				<el-select placeholder="選擇分類" v-model="formData.category">
					<el-option label="茶類" value="茶類"> </el-option>
					<el-option label="咖啡類" value="咖啡類"> </el-option>
					<el-option label="水果類" value="水果類"> </el-option>
					<el-option label="觀光" value="觀光"> </el-option>
				</el-select>
				<el-upload
					v-model:file-list="fileList"
					action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
					list-type="picture-card"
					:on-preview="handlePictureCardPreview"
					:on-remove="handleRemove"
				>
					<el-icon><Plus /></el-icon>
				</el-upload>
				<el-icon><Plus /></el-icon>
			</el-form>
		</div>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="$emit('close')">取消</el-button>
				<el-button type="primary" @click="handleConfirm">
					確認
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { onUpdated, ref } from "vue";
import type { UploadProps, UploadUserFile } from "element-plus";

const props = defineProps<{ visible: boolean; dataList: any }>();

const formData = ref({
	name: "",
	price: "",
	content: "",
	category: "",
	image: [""],
});
const fileList = ref<UploadUserFile[]>([]);

onUpdated(() => {
	formData.value.name = props.dataList.title;
	formData.value.price = props.dataList.money;
	formData.value.content = props.dataList.content;
	formData.value.category = props.dataList.category;
	formData.value.image = props.dataList.image;
	fileList.value = props.dataList.image.map((item: string) => {
		return {
			// name: item.split("/").pop(),
			url: item,
		};
	});
});

const handleSubmit = () => {
	console.log(props.dataList);
};

const handleConfirm = () => {
	console.log("Confirm clicked", props.dataList);
};

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
	console.log(uploadFile, uploadFiles);
};

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
	dialogImageUrl.value = uploadFile.url!;
	dialogVisible.value = true;
};
</script>

<style scoped lang="less"></style>
