<template>

	<div class="filter-settings">
		
		<div class="filter-container row">

		</div>

	</div>


</template>

<script>



	export default {

		props: {
			"settings": {
				type: Object,
				default: {}
			}
		},
		components: {
		
		},
		data () {
			return {

				}
			}
	}
</script>

<style lang="scss" scoped>
	
	.filter-settings{
		margin-bottom: 1em;

		.filter-container{
			background-color:red;
			height:2em;
		}

	}

</style>
