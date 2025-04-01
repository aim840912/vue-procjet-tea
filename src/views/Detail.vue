<template>
	<el-row :gutter="5">
		<el-col :span="12" class="mb">
			<div class="image-containter">
				<el-image
					ref="imageRef"
					:src="url"
					show-progress
					:preview-src-list="srcList"
					fit="cover"
				/>
			</div>
		</el-col>
		<el-col :span="10" class="product-container">
			<div class="mr">
				<div class="category ml">
					<p>catelogy</p>
				</div>
				<div>
					<h1 class="title mt mb ml">Title</h1>
				</div>
				<p class="price ml">$100</p>
				<div class="content mt ml">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi eligendi enim nostrum suscipit similique neque
						asperiores officia facilis ullam voluptas impedit error
						tempore quia repellat perspiciatis quidem, pariatur
						accusamus ut.
					</p>
				</div>
			</div>
		</el-col>
	</el-row>
	<div>
		<el-button class="cart-btn" type="danger" plain>放入購物車</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ImageInstance } from "element-plus";

const url =
	"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
const srcList = [
	"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
	"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
	"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
	"https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
	"https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
	"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
	"https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];

const imageRef = ref<ImageInstance>();
</script>
<style scoped lang="less">
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
