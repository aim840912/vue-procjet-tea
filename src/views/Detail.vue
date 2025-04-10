<template>
	<el-row :gutter="5">
		<el-col :span="12" class="mb">
			<div class="main-image ml">
				<el-image
					:src="imageUrl"
					show-progress
					:preview-src-list="srcList"
					fit="cover"
				/>
			</div>
			<div class="small-image mt">
				<el-carousel
					:interval="4000"
					type="card"
					height="300px"
					@change="changeImage"
				>
					<el-carousel-item v-for="item in srcList" :key="item">
						<el-image
							ref="imageRef"
							:src="item"
							show-progress
							fit="cover"
						/>
					</el-carousel-item>
				</el-carousel>
			</div>
		</el-col>
		<el-col :span="10" class="product-container">
			<div class="mr">
				<div class="category ml">
					<p>{{ dataList.category }}</p>
				</div>
				<div>
					<h1 class="title mt mb ml">{{ dataList.title }}</h1>
				</div>
				<p class="price ml">$ {{ dataList.price }}</p>
				<div class="content mt ml">
					<p>
						{{ dataList.content }}
					</p>
				</div>
			</div>
		</el-col>
	</el-row>
	<div>
		<el-button
			class="cart-btn"
			type="danger"
			plain
			@click="addToCart(dataList.orderNo)"
			>放入購物車</el-button
		>
	</div>

	<div>
		<el-button
			class="edit-button"
			type="primary"
			size="small"
			@click="editProduct"
		>
			編輯產品</el-button
		>
		<el-button class="edit-button" type="danger" size="small" @click="">
			刪除產品</el-button
		>
	</div>

	<EditProduct
		:visible="visible"
		@close="visible = false"
		:dataList="dataList"
	/>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { ImageInstance } from "element-plus";
import { post } from "@/utils/http";
import { useUserStore } from "@/store/auth";
import EditProduct from "./EditProduct.vue";
const userStore = useUserStore();

const props = defineProps(["orderNo"]);

onMounted(() => {
	loadData();
});

const loading = ref<boolean>(false);
const dataList = ref({
	orderNo: "",
	price: 0,
	category: "",
	title: "",
	content: "",
});

const loadData = async () => {
	loading.value = true;
	try {
		const { data } = await post("/product/detail", {
			orderNo: props.orderNo,
		});
		data.image.push(...srcList);
		dataList.value = data;
	} catch (error) {
	} finally {
		loading.value = false;
	}
};
const addToCart = (orderNo: string) => {
	userStore.addToCarts(orderNo);
};

const srcList = [
	"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
	"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
	"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
	"https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
	"https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
	"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
	"https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];
const visible = ref<boolean>(false);
const editProduct = () => {
	visible.value = true;
};

const imageRef = ref<ImageInstance>();
const imageUrl = ref<string>(srcList[0]);

const changeImage = (index: number) => {
	imageUrl.value = srcList[index];
};
</script>
<style scoped lang="less">
.main-image {
	width: 90%;
	height: 400px;
	overflow: hidden;
	.el-image {
		width: 100%;
		height: 100%;
	}
}
.category {
	p {
		font-size: 20px;
		color: #007aff;
		font-weight: 500;
	}
}
.title {
	font-size: 50px;
}
.price {
	font-size: 30px;
	color: #f05e5e;
	font-weight: 500;
}
.content {
	p {
		font-size: 20px;
	}
}
.cart-btn {
	float: right;
	width: 100px;
}
</style>
