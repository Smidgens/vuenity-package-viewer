import Vue from "vue";

const AssetEvents = new Vue(
	{
		data(){
			return {
			
			};
		},
		methods: {
			selectAsset(asset){
				this.$emit("asset-selected", asset);
			},
			onSelectAsset(fn){
				this.$on("asset-selected", fn);
			},
			offSelectAsset(fn){
				this.$off("asset-selected", fn);
			},
			refreshDataPath(path){
				this.$emit("refresh-datapath", path);
			},
			onRefreshDataPath(fn){
				this.$on("refresh-datapath", fn);
			},
			offRefreshDataPath(fn){
				this.$off("refresh-datapath", fn);
			}
		}
	}
);




export default AssetEvents;