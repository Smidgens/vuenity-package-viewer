<template>

	<div>

		<div class="header-row">

		</div>

		
		<fullrow >
			<query-input :disabled="selectedAsset !== null" />
		</fullrow>
<!-- 
		<fullrow>
			<filter-settings :settings="filterSettings"/>
		</fullrow> -->

		<fullrow v-if="selectedAsset !== null">
			<asset-details :asset="selectedAsset"/>
		</fullrow>

		<fullrow v-else>
			<grid-list :assets="assets"/>
		</fullrow>


	</div>

</template>

<script>

	import GridList from "./grid-list";
	import AssetData from "./../../services/AssetData";
	import FilterSettings from "./filter-settings";
	
	import FullRow from "./../Shared/fullrow";

	import AssetDetails from "./asset-details";

	import AssetEvents from "./../../eventbuses/AssetEvents";

	import QueryInput from "./query-input";

	export default {
		props: {

		},
		components: {
			"grid-list": GridList,
			"filter-settings": FilterSettings,
			"fullrow": FullRow,
			"asset-details": AssetDetails,
			"query-input": QueryInput
		},
		data () {
			return {
				assets: [],
				filterSettings: {

				},
				selectedAsset: null
			}
		},
		methods: {
			onLoadAssets(assets){
				this.assets = assets;
			},
			onLoadFailed(response){
				// nada
			},
			selectAsset(asset){
				this.selectedAsset = asset;
			},
			onPathChanged(path){
				this.assets = [];
				AssetData.getdata(decodeURIComponent(path), this.onLoadAssets, this.onLoadFailed);
			}
		},
		created(){
			
			if(this.$route.query.src){
				AssetData.getdata(decodeURIComponent(this.$route.query.src), this.onLoadAssets, this.onLoadFailed);
			}

			
			AssetEvents.onSelectAsset(this.selectAsset);
			AssetEvents.onRefreshDataPath(this.onPathChanged);
		},
		destroyed(){
			AssetEvents.offSelectAsset(this.selectAsset);
			AssetEvents.offRefreshDataPath(this.onPathChanged);
		}
	}
</script>

<style lang="scss" scoped>

	.header-row{
		margin-bottom: 1em,
	}

</style>
