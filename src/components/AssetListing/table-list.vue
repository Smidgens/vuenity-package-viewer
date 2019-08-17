<template>

	<div class="list-container">
		<div class="table-list row">

			<table class="table table-striped table-sm table-hover " style="width:100%;">

				<tbody>
					<tr @click="selectAsset(asset)" v-for="(asset, index) in assets" :key="index" class="table-row d-flex">

						<td class="col-md-1">
							<img :src="asset.thumbnail" class="image"/>
						</td>
						<td class="col-md-11">
							{{asset.name}}
						</td>

					</tr>
				</tbody>
				

			</table>

		</div>

	</div>


</template>

<script>

	import AssetEvents from "./../../eventbuses/AssetEvents";

	export default {


		name: "table-list",
		props: {
			"assets": Array
		},
		components: {
	
		},
		data () {
			return {

			}
		},
		methods: {
			selectAsset(asset){
				AssetEvents.selectAsset(asset); 
			}
		}
	}
</script>

<style lang="scss" scoped>

	.list-container{
		margin-left:1em;
		margin-right:1em;
	}

	.table-row{
		cursor: pointer;
	}

	.image{
		// max-height: 4em;
		width:50%;
		// max-height:100px;
	}

</style>
