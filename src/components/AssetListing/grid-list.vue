<template>

	<div class="grid-container">
		<div class="grid-list row">

			<grid-item v-for="(asset, index) in assets" :key="index" :asset="asset" />

		</div>

	</div>


</template>

<script>

	import GridItem from "./grid-item";

	export default {


		name: "grid-list",
		props: {
			"assets": Array
		},
		components: {
			"grid-item": GridItem
		},
		data () {
			return {

				}
			}
	}
</script>

<style lang="scss" scoped>

.grid-container{
	margin-left:1em;
	margin-right:1em;
}
</style>
