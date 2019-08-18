

const extractTags = function(assets){
	var tags = [];
	for(var i = 0; i < assets.length; i++){
		if(!Array.isArray(assets[i].tags)){ continue; }
		for(var j = 0; j < assets[i].tags.length; j++){
			tags.push(assets[i].tags[j]);
		}
	}
	tags = tags.filter(function(value, index, self){
		return self.indexOf(value) === index;
	});
	tags.sort(function(a, b) { 
		return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
	});
	return tags;
};


export default {
	extractTags: extractTags
};