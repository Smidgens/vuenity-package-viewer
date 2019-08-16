
import Vue from 'vue'


const getData = function(url, onSuccess, onError){
	Vue.http.get(url).then(response => {
		onSuccess(JSON.parse(response.bodyText));
	}, response => {
		onError(response);
	});
};


export default {
	getdata: getData
}