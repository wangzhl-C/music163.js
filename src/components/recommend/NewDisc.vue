<script setup>
import NavBar from './NavBar.vue';
import NewDiscCarousel from './NewDiscCarousel.vue';
</script>
<template>
	<div class="new-disc">
		<nav-bar
			title="新碟上架"
			link="/"
		></nav-bar>
	</div>
	<div class="new-disc-content">
		<new-disc-carousel></new-disc-carousel>
	</div>
</template>
<style scoped lang="less"></style>