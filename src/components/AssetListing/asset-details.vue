<template>

	<div class="asset-details">
		
		<div class="filter-container row">

			<div class="col-md-12" style="margin-bottom:1em;">
				<button type="button" class="btn btn-info btn-sm" @click="goBack()">
					<i class="fa fa-arrow-left"></i> Back
				</button>
			</div>

			<div class="col-md-12">

				<div class="row">

					<div class="col-md-4">
						<img :src="asset.thumbnail" class="image"/>

						<table style="width:100%;" class="table">
							<tr>
								<td><b>Tags</b></td>
								<td>
									<span v-for="(tag, index) in tags" :key="index" class="badge badge-pill badge-dark tag-badge">
										{{tag}}
									</span>
								</td>
							</tr>
						</table>
						
					</div>

					<div class="col-md-8">

						<div class="row">
							<div class="col-md-12">
								<h2 class="title-header float-left" style="margin:0">
									{{asset.name}}
								</h2>
								<version-select :versionMap="asset.versions" class="float-right"/>
							</div>
						</div>

						<hr>


						<ul style="list-style:none; padding:0">
							<li v-for="(link, index) in links" :key="index">

								<a :href="link.src" target="_">
									<i class="fa" :class="['fa-' + link.icon]" style="margin-right:0.2em"/>
									{{link.label}}
									
								</a>
							</li>

							
						</ul>

					</div>

					

				</div>


			</div>
			

		</div>

	</div>


</template>

<script>

	import AssetEvents from "./../../eventbuses/AssetEvents";

	import VersionSelect from "./version-select";


	export default {

		props: {
			"asset": Object
		},
		components: {
			"version-select": VersionSelect
		},
		data () {
			return {

			}
		},
		methods: {
			goBack(){
				AssetEvents.selectAsset(null);
			}
		},
		computed: {
			assetStoreUrl(){
				return this.asset.storeUrl;
			},
			downloadUrl(){
				return this.asset.downloadUrl;
			},
			tags(){
				return this.asset.tags;
			},
			links(){
				return [
					{
						label: "View on Asset Store",
						icon: "external-link",
						src: this.assetStoreUrl
					}
				];
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.asset-details{

		.image{
			width:100%;
			border-radius: 2px;
			margin-bottom:1em;
			box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.267);
		}

	}
	.title-header{

	}

	.subheader{
		color:grey;
	}

	.tag-badge{
		margin-right:0.2em;
	}

</style>
