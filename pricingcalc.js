function pricecalc() {
var pageNum = document.getElementById('pageNum').value;
var store = document.getElementById('storeReq').accessKey;
var user = document.getElementById('userReq').accessKey;
var pagePrice;
var storePrice;
var userPrice;

if(pageNum === 3) {
	pagePrice = 150;
}
else if(pageNum === 4) {
	pagePrice = 200;
}
else if(pageNum === 5) {
	pagePrice = 250;
}
else if(pageNum > 5) {
	pagePrice = 400
}
else {
	document.write('Were sorry, something went wrong, please check that you filled in all required feilds or left them at their default setting');
}

if(store = 'yes') {
	storePrice = 150;
}
else if(store = 'no') {
	storePrice = 0;
}
else {
	document.write('Were sorry, something went wrong, please check that you filled in all required feilds or left them at their default setting');
}

if(user = 'yes'){
	userPrice = 50;
}
else if(user = 'no') {
	userPrice = 0;
}
else {
	document.write('Were sorry, something went wrong, please check that you filled in all required feilds or left them at their default setting');
}
}