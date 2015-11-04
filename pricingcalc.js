var pagePrice;
var storePrice;
var userPrice;

function priceCalc() {
var pageNum = document.getElementById('pageNum').value;
var store = document.getElementById('storeReq').accessKey;
var user = document.getElementById('userReq').accessKey;

if(pageNum = 3) {
	pagePrice = 150;
}
else if(pageNum = 4) {
	pagePrice = 200; 
}
else if(pageNum = 5) {
	pagePrice = 250;
}
else if(pageNum > 5) {
	pagePrice = 300;
}
else {
	alert('Something went wrong');
}
alert(pagePrice);
}
