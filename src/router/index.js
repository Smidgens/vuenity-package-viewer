import Vue from "vue";
import Router from "vue-router";


import AssetListing from '@/components/AssetListing/main';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "AssetListing",
			component: AssetListing
		}
	],
	mode: "history"
})
