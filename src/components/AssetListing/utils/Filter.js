
const assetHasTags = function(asset, tags){

	for(var i = 0; i < asset.tags.length; i++){
		if(tags.includes(asset.tags[i])){
			return true;
		}
	}
	return false;
};

const assetMatchesSearch = function(asset, searchQuery){
	return asset.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
};

const filterByTags = function(assets, tags){
	if(tags.length === 0){ return assets; }
	var result = [];
	for(var i = 0; i < assets.length; i++){
		if(assetHasTags(assets[i], tags)){
			result.push(assets[i]);
		}
	}
	return result;
};

const filterBySearch = function(assets, searchQuery){
	var result = [];
	for(var i = 0; i < assets.length; i++){
		if(assetMatchesSearch(assets[i], searchQuery)){
			result.push(assets[i]);
		}
	}
	return result;
};


export default {
	filterByTags: filterByTags,
	filterBySearch: filterBySearch
}