<template>
	<div>
		<b-dropdown text="Download" size="sm" variant="outline-secondary">
			<b-dropdown-item v-for="(version, index) in versions" :key="index" @click="openUrl(version.url)">
				<span :title="version.url">v{{version.label}}</span>
			</b-dropdown-item>
		</b-dropdown>
	</div>
</template>

<script>


	export default {

		props: {
			"versionMap": Object
		},
		computed: {
			versions(){
				var versions = [];
				for(var k in this.versionMap){
					versions.push({
						label: k,
						url: this.versionMap[k]
					})
				}
				return versions;
			}
		},	
		methods: {
			openUrl(version){
				window.open(version, "_blank");
			}
		}
	}
</script>

<style lang="scss" scoped>


</style>
