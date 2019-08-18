<template>

	<div class="settings">


		<div class="row" >

			<div class="col-md-3">
				<div class="settings-container">

					
					
					<div class="float-left">
						<label class="label">
							Sort by
						</label>
						<div class="btn-group btn-group-sm " style="outline: none !important">
							
							<button v-for="(key, index) in sortKeys" :key="index" type="button" class="btn btn-outline-secondary mode-button" @click="setSortKey(key)">
								<!-- <i class="fa" :class="['fa-' + mode.i]"></i> -->
								{{key}}
								<i class="fa" :class="['fa-' + sortIcon]"/>
							</button>
						</div>
						

					</div>
					

					<!-- Mode -->
					<div class="btn-group btn-group-sm float-left" style="outline: none !important; margin-left:0.5em">
						<button v-for="(mode, key) in displayOptions" :key="key" type="button" :title="'Display as ' + key" class="btn btn-secondary mode-button" @click="setDisplayMode(key)" :disabled="isModeActive(key)">
							<i class="fa" :class="['fa-' + mode.i]"></i>
						</button>
					</div> 
				</div>
			</div>

			<div class="col-md-5">
				<div class="input-group input-group-sm">
				
					<input v-model="settings.searchQuery" type="text" class="form-control" placeholder="Filter">
					<div class="input-group-append">
						<span class="input-group-text">
							<i class="fa fa-search"/>
						</span>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<tag-select :settings="settings"/>
			</div>
		</div>
	

	</div>


</template>

<script>
	import 'vue-select/dist/vue-select.css';
	import VueSelect from "vue-select";

	import TagSelect from "./tag-select";


	export default {

		props: {
			"settings": {
				type: Object,
				default: {
					displayMode: "Grid",
					sortOrder: "asc",
					sortKey: "name",
					tags: [],
					selectedTags: [],
					searchQuery: ""
				}
			}
		},
		components: {
			"v-select": VueSelect,
			"tag-select": TagSelect
		},
		data () {
			return {
				displayOptions: {
					"Grid": {
						i: "th-large"
					},
					"List": {
						i: "list"
					}
				},
				selected: undefined,
				selectedTags: [],
				tags: [
					"Animation",
					"Tools",
					"Visual scripting"
				],
				sortKeys: [
					"name"
				]

			}
		},
		computed: {
			displayMode: {
				get(){ return this.settings.displayMode; },
				set(v){ this.settings.displayMode = v; }
			},
			sortKey: {
				get() { return this.settings.sortKey; },
				set(v){ this.settings.sortKey = v; }
			},
			sortOrder(){
				return this.settings.sortOrder;
			},
			sortIcon(){
				return this.settings.sortOrder === "asc" ? "sort-asc" : "sort-desc";
			}
		},
		methods: {
			flipSortOrder(){
				var v = "asc";
				if(this.settings.sortOrder === "asc"){ v = "desc"; }
				this.settings.sortOrder = v;
			},
			setDisplayMode(mode){
				this.displayMode = mode;
			},
			isModeActive(mode){
				return this.displayMode === mode;
			},
			setSortKey(key){
			
				this.flipSortOrder();
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	@import "@/mixins/noSelect.scss";

	.settings{
		margin-bottom: 1em;

		.settings-container{
			width:100%;
		}

	}

	.mode-button{
		@include noSelect();
	}

	.mode-button:focus{
		 outline: none !important;
		  box-shadow: none !important;
	}

	.label{
		color:grey;
		font-size: 0.9em;
	}

</style>
