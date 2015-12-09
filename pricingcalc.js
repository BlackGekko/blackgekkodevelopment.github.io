var pagePrice;
var storePrice;
var databasePrice;
var finalPrice;

function priceCalc() {
	
	//Prevent page from refresh
	event.preventDefault();
	
	//Get selected values from user
	var pageAmount = document.getElementById('page').value;
	var storeOption = document.getElementById('store').value;
	var databaseOption = document.getElementById('database').value;
	
	//Page amount and price
	if(pageAmount == 1) {
		pagePrice = 50;
	}
	else if(pageAmount == 2) {
		pagePrice = 60;
	}
	else if(pageAmount == 3) {
		pagePrice = 100;
	}
	else if(pageAmount == 4) {
		pagePrice = 150;
	}
	else if(pageAmount == 5) {
		pagePrice = 200;
	}
	else if(pageAmount > 5) {
		pagePrice = 300;
	}
	else {
		alert('Something went wrong!')
	}
	
	//Store option and price
	if(storeOption == 1) {
		storePrice = 100;
	}
	else if(storeOption == 2) {
		storePrice = 0;
	}
	else {
		alert("Something went wrong");
	}
	
	//Database option and price
	if(databaseOption == 1) {
		databasePrice = 100;
	}
	else if(databaseOption == 2) {
		databasePrice = 0;
	}
	else {
		alert("Something went wrong");
	}
	
	//Add prices to get final estimate
	finalPrice = pagePrice + storePrice + databasePrice;
	
	//Create text element to display final price
	var price = document.createElement('p');
	var node = document.createTextNode('The estimate of your site is: $' + finalPrice);
	price.appendChild(node);
	var element = document.getElementById('finalPrice');
	element.appendChild(price);
	price.style.marginTop = "10px";
}
