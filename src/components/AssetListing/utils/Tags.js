

const extractTags = function(assets){
	var tags = [];

	for(var i = 0; i < assets.length; i++){
		if(!Array.isArray(assets[i].tags)){ continue; }
		for(var j = 0; j < assets[i].tags.length; j++){
			tags.push(assets[i].tags[j]);
		}
	}
	// return tags;
	return tags.filter(function(value, index, self){
		return self.indexOf(value) === index;
	});
};


export default {
	extractTags: extractTags
};