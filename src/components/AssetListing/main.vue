<template>

	<div>

		<div class="header-row">

		</div>

		
		<fullrow >
			<query-input :disabled="selectedAsset !== null" />
		</fullrow>

		<fullrow v-if="selectedAsset === null">
			<filter-controls :settings="filterSettings"/>
		</fullrow>

		<fullrow v-if="selectedAsset !== null">
			<asset-details :asset="selectedAsset"/>
		</fullrow>
		
		<fullrow v-if="selectedAsset === null" style="padding:0">
			<hr>
		</fullrow>

		<fullrow v-if="showGrid">
			<grid-list :assets="filteredAssets"/>
		</fullrow>

		<fullrow v-if="showList">
			<table-list :assets="filteredAssets"/>
		</fullrow>


	</div>

</template>

<script>

	import GridList from "./grid-list";
	import TableList from "./table-list";

	import AssetData from "./../../services/AssetData";
	import FilterControls from "./filter-controls";
	import FullRow from "./../Shared/fullrow";
	import AssetDetails from "./asset-details";
	import AssetEvents from "./../../eventbuses/AssetEvents";
	import QueryInput from "./query-input";

	import Sort from "./utils/Sort";
	import Tags from "./utils/Tags";
	import Filter from "./utils/Filter";

	export default {
		props: {

		},
		components: {
			"grid-list": GridList,
			"table-list": TableList,
			"filter-controls": FilterControls,
			"fullrow": FullRow,
			"asset-details": AssetDetails,
			"query-input": QueryInput
		},
		data () {
			return {
				assets: [],
				filterSettings: {
					displayMode: "Grid",
					sortOrder: "asc",
					tags: [],
					selectedTags: [],
					searchQuery: ""
				},
				selectedAsset: null
			}
		},
		computed: {
			isViewingAsset(){
				return this.selectedAsset !== null;
			},
			displayMode(){
				return this.filterSettings.displayMode;
			},
			showGrid(){
				return !this.isViewingAsset && this.displayMode === "Grid";
			},
			showList(){
				return !this.isViewingAsset && this.displayMode === "List";
			},
			filteredAssets(){
				var r = Sort.sortByKey("name", this.assets);
				if(this.filterSettings.sortOrder === "desc"){
					r.reverse();
				}
				r = Filter.filterByTags(r, this.filterSettings.selectedTags);
				r = Filter.filterBySearch(r, this.filterSettings.searchQuery);
				return r;
			},
			loadedTags(){
				return Tags.extractTags(this.filteredAssets);
			}
		},
		methods: {
			onLoadAssets(assets){
				this.assets = assets;
				this.filterSettings.tags = Tags.extractTags(assets);
			},
			onLoadFailed(response){
				// nada
			},
			selectAsset(asset){
				this.selectedAsset = asset;
			},
			onPathChanged(path){
				this.assets = [];
				this.filterSettings.tags = [];
				AssetData.getdata(decodeURIComponent(path), this.onLoadAssets, this.onLoadFailed);
			}
		},
		created(){
			
			if(this.$route.query.src){
				this.onPathChanged(this.$route.query.src);
				// AssetData.getdata(decodeURIComponent(this.$route.query.src), this.onLoadAssets, this.onLoadFailed);
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
