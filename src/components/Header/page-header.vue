<template>
	<div class="page-header">
		<div class="container">
			
			<div class="row">
				<div class="col-md-12">

					<h6 class="page-title">
						Unity Asset Viewer
					</h6>

					<a href="https://github.com/Smidgens/vuejs-unity-asset-viewer" target="_" class="source-link">
						<i class="fa fa-github"/> GitHub
					</a>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>

	.page-header{
		width:100%;
		// height:2.5em;
		background-color:rgb(39, 39, 39);
		position:fixed;
		top:0;
		margin-bottom:1em;
		z-index:100000;

		color:white;

		.source-link{
			color:white;
			float:right;
		}

		.page-title{
			float:left;
		}

		.container{
			padding-top: 0.2em;
		}
	}

</style>
