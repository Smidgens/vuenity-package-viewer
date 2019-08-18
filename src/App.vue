<template>
	<div id="app">

		<page-header/>

		<div class="container content">
			<router-view/>
		</div>
	</div>

	<!-- <div id="app" class="container">
		<router-view/>
	</div> -->
</template>

<script>

	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-vue/dist/bootstrap-vue.css';
	import "./styles/global.css";

	import PageHeader from "./components/Header/page-header";

	export default {
		name: "App",
		components: {
			"page-header": PageHeader
		}
	}
</script>

<style lang="scss" scoped>
	
	.content{
		margin-top:3em;
	}


</style>
