<template>

	<div class="item-container col-md-3 col-lg-2 col-sm-6 col-xs-6" @click="select()">


		<div class="image-wrapper">
			<div class="thumbnail" :style="thumbStyles">
				
				<div class="label-box" >
					<div class="label-row">
						<h6 class="float-left">
							{{label}}
						</h6>
					
					
						
					</div>
				
				</div>

			</div>
		</div>
	
	</div>

</template>

<script>

	import AssetEvents from "./../../eventbuses/AssetEvents";

	export default {
		name: "grid-item",
		props: {
			"asset": {
				type: Object,
				default: {
					name: "<Empty>",
					thumbnail: ""
				}
			}
		},
		data () {
			return {
			
			}
		},
		methods: {
			select(){
				AssetEvents.selectAsset(this.asset);
			}
		},
		computed: {
			thumbStyles(){
				return {
					"background-image": "url(" + this.asset.thumbnail + ")"
				}
			},
			label(){
				return this.asset.name;
			}
		},
		created(){

		
		}
	}
</script>

<style lang="scss" scoped>

	@import "@/mixins/centerChild.scss";
	@import "@/mixins/pinCorner.scss";
	@import "@/mixins/grayscale.scss";

	@mixin textShadow(){
		// -webkit-text-stroke: 1px black;
		text-shadow:
			1px 1px 0 #000,
			-1px -1px 0 #000,  
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.item-container:hover{
		@include grayscale(0%);
		cursor:pointer;
	}

	.item-container{

		@include grayscale(100%);
		
		padding:0.4em;
		overflow:visible;
		.image-wrapper{
			// background-color:blue;
			width: 100%;
			height:100%;
			display: inline-block;
			
			.thumbnail{
				box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.575);
				border-radius:2px;

				@include pinCorner();

				background-position: center;
				background-size:cover;
				background-repeat: no-repeat;

				@include centerChild(98%);
				


				.label-box{
					// @include pinCorner();
					
					position: absolute;
					
					
					@include pinCorner();
					
					// padding:0.5em;
					.label-row{
						overflow:visible;
						width:100%;
						bottom: 0 !important;
						position: absolute;
						color:white;
						background-color:rgb(22, 22, 22);
						padding-left:0.2em;
						padding-right:0.5em;
						padding-top:0.2em;

						// @include textShadow();


						.context-btn{
							color:grey;
							cursor:pointer;
						}
						.context-btn:hover{
							color:white;
						}
					}
				}
			}
		}

		.image-wrapper:before {
				padding-top: 50%;
				display: block;
				content: '-';
			}

	}

</style>
