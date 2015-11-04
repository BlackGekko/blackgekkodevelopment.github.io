var pagePrice;
var storePrice;
var userPrice;

function priceCalc() {
var pageNum = document.getElementById('pageNum').value;
var store = document.getElementById('storeReq').accessKey;
var user = document.getElementById('userReq').accessKey;

if(pageNum == 1) {
	pagePrice = 50;
}
else if(pageNum == 2) {
	pagePrice = 50;
}
else if(pageNum == 3) {
	pagePrice = 150;
}
else if(pageNum == 4) {
	pagePrice = 200; 
}
else if(pageNum == 5) {
	pagePrice = 250;
}
else if(pageNum > 5) {
	pagePrice = 300;
}
else {
	alert('Something went wrong');
}

if(store == 'yes'||'Yes'){
	storePrice = 100;
}
else if(store == 'no'||'No') {
	storePrice = 0;
}
else {
	alert('Something went wrong');
}

if(user == 'yes'||'Yes') {
	userPrice = 65;
}
else if(user == 'no'||'No') {
	userPrice = 0;
}
else {
	alert('Something went wrong');
}

var price = pagePrice + storePrice + userPrice;

alert(price);
}
