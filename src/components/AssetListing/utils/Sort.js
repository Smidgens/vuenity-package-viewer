

const sortByKey = function(key, arr){
	var copy = JSON.parse(JSON.stringify(arr));
	copy.sort(function(a, b){
		return a[key] > b[key] ? 1 : -1;
	});
	return copy;
};


export default {
	sortByKey: sortByKey
};