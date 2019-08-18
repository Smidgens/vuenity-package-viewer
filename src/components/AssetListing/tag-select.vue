<template>

	<div >

		<v-select :closeOnSelect="false" style="width:100% !important;" :placeholder="'Tags'" :filterable="true" v-model="settings.selectedTags" :options="settings.tags" :multiple="true" :clearable="true">
			<template slot="selected-option" slot-scope="option">
				<span :class="option.icon"></span>
				{{ option.label }}
			</template>


		</v-select>


	</div>


</template>

<script>
	import "vue-select/dist/vue-select.css";
	import VueSelect from "vue-select";

	export default {

		props: {
			"settings": {
				type: Object,
				default: {
					tags: [],
					selectedTags: []
				}
			}
		},
		components: {
			"v-select": VueSelect
		},
		data () {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>


</style>
