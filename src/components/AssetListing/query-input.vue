<template>

	<div class="query-input">
		
		<div class="row">
			<!-- {{srcUrl}} -->

			<div class="input-group col-md-12">
				
				<div class="input-group-prepend">
					<span class="input-group-text">File</span>
				</div>
				<input :disabled="disabled" type="text" class="form-control" v-model="query" placeholder="http://my-data.json">
				<div class="input-group-append">
					<!-- <span class="input-group-text" id="basic-addon1">@</span> -->

					<button  :disabled="disabled" class="btn btn-info btn-sm" @click="refresh()">
						<i class="fa fa-refresh"/>
					</button>
				</div>
			</div>

		</div>

	</div>


</template>

<script>

	import Vue from "Vue";

	import AssetEvents from "./../../eventbuses/AssetEvents";

	export default {

		props: {
			"disabled": Boolean
		},
		components: {
		
		},
		data () {
			return {
				query: ""
			}
		},
		methods: {
			refresh(){
				this.$router.push({
					name: "AssetListing",
					query: {
						src: encodeURIComponent(this.query)
					}
				});
				
				AssetEvents.refreshDataPath(this.query);
			}
		},
		computed: {
			srcUrl(){
				return decodeURIComponent(this.$route.query.src);
			}
		},
		created(){
	
			if(this.$route.query.src){
				this.query =  decodeURIComponent(this.$route.query.src);
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.query-input{
		margin-bottom: 1em;

	

	}

</style>
