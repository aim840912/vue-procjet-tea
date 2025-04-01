<template>
	<el-col :span="24">
		<el-card>
			<template #header>
				<div class="card-header">
					<span>產品資料</span>
				</div>
			</template>
			<el-row :gutter="20">
				<el-col :span="16">
					<el-form @handle-submit="handleSubmit">
						<el-form :model="formData" ref="form1">
							<el-form-item label="名稱">
								<el-input v-model="formData.name" />
							</el-form-item>
							<el-form-item label="價格">
								<el-input v-model="formData.price" />
							</el-form-item>
							<el-form-item label="數量">
								<el-input v-model="formData.count" />
							</el-form-item>
						</el-form>
						<el-form-item label="介紹">
							<el-input type="textarea" />
						</el-form-item>
						<el-form :model="formData.category" ref="form2">
							<el-select
								placeholder="選擇分類"
								v-model="formData.category"
							>
								<el-option label="茶類" value="茶類">
								</el-option>
								<el-option label="咖啡類" value="咖啡類">
								</el-option>
								<el-option label="水果類" value="水果類">
								</el-option>
								<el-option label="觀光" value="觀光">
								</el-option>
							</el-select>
						</el-form>
					</el-form>
				</el-col>
				<el-col :span="8">
					<div>
						<h1 class="mb">上傳產品圖片</h1>
					</div>
					<div class="d-flex justify-center pa-3">
						選擇一個檔案
						<img
							v-if="imageUrl"
							:src="imageUrl"
							alt="Uploaded Image"
						/>
						<input
							type="file"
							@change="uploadImage"
							accept="image/*"
						/>
					</div>
					<div class="mb mt">
						<p>選擇多個檔案</p>
					</div>
					<div class="d-flex justify-center pa-3">
						<div
							class="image-container"
							v-for="(item, index) in imageUrlList"
						>
							<button
								class="image-button"
								@click="removeImage(index)"
							>
								刪除
							</button>
							<img
								class="upload-image"
								style="height: 10vh"
								:key="index"
								:src="item"
							/>
						</div>
						<input
							type="file"
							@change="uploadImageList"
							accept="image/*"
							multiple
						/>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</el-col>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type FormInstance } from "element-plus";

const form1 = ref<FormInstance>();
const form2 = ref<FormInstance>();
const formData = ref({
	name: "",
	price: "",
	count: "",

	category: "",
});
const handleSubmit = () => {
	console.log("表單數據", formData.value);
};

const imageUrl = ref<string>("");
const uploadImage = async (event: Event) => {
	const fileList = (event.target as HTMLInputElement).files;
	if (!fileList) return;

	const file = fileList[0];
	if (file.size === 0) return;

	imageUrl.value = URL.createObjectURL(file);
	console.log("file", imageUrl.value);
};

const imageUrlList = ref<string[]>([]);
const uploadImageList = async (event: Event) => {
	const fileList = (event.target as HTMLInputElement).files;
	if (!fileList) return;

	for (let i = 0; i < fileList.length; i++) {
		imageUrlList.value.push(URL.createObjectURL(fileList[i]));
	}
};

const removeImage = (index: number) => {
	imageUrlList.value.splice(index, 1);
};
</script>

<style scoped lang="less">
.image-container {
	display: inline-block;
	position: relative;
	.image-button {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		color: red;
		border: none;
		opacity: 0;
	}
	.image-button:hover {
		opacity: 0.8;
	}
}
.upload-image:hover {
	opacity: 0.5;

	transform: scale(0.8);
}
</style>
