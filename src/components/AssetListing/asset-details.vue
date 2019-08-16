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

						<!-- <p style="font-weight:bold; margin-bottom:0">Tags</p>
						<span v-for="(tag, index) in tags" :key="index" class="badge badge-pill badge-dark tag-badge">
							{{tag}}
						</span> -->
						
					</div>

					<div class="col-md-8">

						<h1 class="title-header">
							{{asset.name}}
						</h1>

						<h6 class="subheader">
							v{{asset.version}}
						</h6>

						<hr>


						<ul style="list-style:none; padding:0">
							<li v-for="(link, index) in links" :key="index">

								<a :href="link.src" target="_">
									<i class="fa" :class="['fa-' + link.icon]" style="margin-right:0.2em"/>
									{{link.label}}
									
								</a>
							</li>

							<!-- <li>
								<a :href="assetStoreUrl" target="_">
									View on Asset Store
									<i class="fa fa-external-link"></i>
								</a>
							</li> -->
							
						</ul>

					</div>

					

				</div>


			</div>
			

		</div>

	</div>


</template>

<script>

	import AssetEvents from "./../../eventbuses/AssetEvents";


	export default {

		props: {
			"asset": Object
		},
		components: {
		
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
				return this.asset.unityStoreLink;
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
					},
					{
						label: "Download",
						icon: "download",
						src: this.downloadUrl
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
