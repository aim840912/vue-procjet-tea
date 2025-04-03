<template>
	<div class="homepage">
		<div class="contianer">
			<div class="cards">
				<div class="card homepage-content">
					<div class="card-content">
						<div class="card-image">
							<a
								href="https://www.facebook.com/groups/284358098576086"
								target="_blank"
								rel="noreferrer"
							>
								<img :src="tea1" alt="Gamer" />
							</a>
						</div>
						<div class="label">FaceBook</div>
						<div class="card-title">封面</div>
					</div>
				</div>
				<div class="card homepage-content">
					<div class="card-content">
						<div class="card-image">
							<a
								href="https://www.facebook.com/groups/284358098576086"
								target="_blank"
								rel="noreferrer"
							>
								<img :src="tea1" alt="Gamer" />
							</a>
						</div>
						<div class="label">FaceBook</div>
						<div class="card-title">豪德商店</div>
					</div>
				</div>
				<div class="card content">
					<div class="card-content">
						<div class="card-image" @click="goToProduct">
							<img :src="fruit1" />
						</div>
						<div class="label">Product</div>
						<div class="card-title">article3</div>
					</div>
				</div>
				<div class="card content">
					<div class="card-content">
						<div class="card-image" @click="goToContact">
							<img :src="tea2" />
						</div>
						<div class="label">Contact</div>
						<div class="card-title">article2</div>
					</div>
				</div>

				<div class="card form">
					<div class="form-title" @click="goToMap">豪德</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import fruit1 from "@/assets/picture/fruit.jpg";
import tea1 from "@/assets/picture/tea.jpg";
import tea2 from "@/assets/picture/tea2.jpg";
import { useRouter } from "vue-router";

const router = useRouter();
const goToProduct = () => {
	router.push("/product");
};
const goToContact = () => {
	router.push("/contact");
};
const goToMap = () => {
	router.push("/appearmap");
};
</script>

<style scoped lang="less">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,900");
.contianer {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.cards {
	width: calc(100% - 2em);
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1em;
	grid-template-areas: "a a a a" "a a a a" "b b c d" "b b c f";
	width: 100%;
}

.card {
	width: 100%;
	position: relative;
	transition: all 0.25s ease;
	cursor: pointer;
	font-family: "Roboto", sans-serif;
	font-weight: 300;
}
.card:last-child {
	margin-bottom: 0;
}
.card:before {
	height: 0;
	content: "";
	display: block;
	padding-bottom: 47.36%;
}
.card.homepage-content:after {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50%;
	content: "";
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
}
.card:nth-child(1) {
	grid-area: a;
}
.card:nth-child(2) {
	grid-area: b;
}
.card:nth-child(3) {
	grid-area: c;
}
.card:nth-child(4) {
	grid-area: d;
}
.card-content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.card-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.card-image img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
}

.label {
	position: absolute;
	top: 0.45rem;
	left: 0.45rem;
	background: #e2ffe8;
	/* text-transform: uppercase; */
	font-weight: 300;
	font-size: 0.7em;
	color: rgb(0, 44, 11);
	padding: 0.5em;
	font-weight: 800;
}
.card-title {
	position: absolute;
	left: 1em;
	bottom: 1em;
	color: #d6dbeb;
	z-index: 5;
	font-size: 0.8em;
}
.card.form {
	position: relative;
}
.card.form:before {
	background: linear-gradient(60deg, #5073b8, #1098ad, #07b39b, #6fba82);
}
.card.form:after {
	position: absolute;
	top: 0.5em;
	left: 0.5em;
	width: calc(100% - 1em);
	height: calc(100% - 1em);
	content: "";
	background: #2c1e2b;
}
.card.form .form-title {
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	font-size: 7vw;
	font-weight: 900;
	z-index: 5;
	text-transform: uppercase;
	background: linear-gradient(60deg, #5073b8, #1098ad, #07b39b, #6fba82);
	-webkit-text-fill-color: transparent;
	background-clip: text;
}
.card.form .form-title:before {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	content: "豪德";
	opacity: 0.5;
	filter: blur(10px);
	transition: all 0.25s ease;
	z-index: 2;
	background: linear-gradient(60deg, #5073b8, #1098ad, #07b39b, #6fba82);
	-webkit-text-fill-color: transparent;
	background-clip: text;
	transform: translateX(-50%) translateY(-50%);
}
.card:nth-child(2) .label {
	background: #ef4e7b;
}
.card:nth-child(3) .label {
	background: #2be68f;
}
.card:hover {
	transform: scale(1.01);
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
}
.card:hover .form-title:before {
	filter: blur(3px);
	opacity: 0.7;
}
</style>
