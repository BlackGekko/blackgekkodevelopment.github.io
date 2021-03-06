<!DOCTYPE html>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta charset="utf-8"/>
    	<title>Black Gekko Development</title>
    	<link type = "text/css" rel = "stylesheet" href = "stylesheet2.css">
    	<link href="css/bootstrap.css" rel="stylesheet">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script> 
    	<script src="js/bootstrap.min.js"></script>
    	<link rel="shortcut icon" type="image/png" href="https://cloud.githubusercontent.com/assets/14165485/10320623/4cb96496-6c29-11e5-911d-bbcb15306971.jpg"/>
        <link href='https://fonts.googleapis.com/css?family=Orbitron|Bangers' rel='stylesheet' type='text/css'>
		<script src="pricingcalc.js"></script>
    	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    	<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    	<![endif]-->
	</head>

	<body>
    	<div class ="navigation">
			<ul class="nav nav-pills">
				<li><a href="index.html">Home</a></li>
				<li><a href="pricing.html">Pricing</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>	
		</div>
        
        <div class="jumbotron">
			<h1>Black Gekko Development</h1>
			<p>Dedicated in helping build a better web</p>
		</div>
        
        <div class="pricingInfo" spellcheck="true">
        	<h2 style="font-family: 'Bangers', cursive;">Pricing Information</h2>
            <p>Before we being developing your website, we will have several meetings with our clients to get the information needed to create the perfect site. These meetings will also include a               pricing discussion, the price to build your site will be decided by the amont of content and the amount of time needed to create this website, a website with three pages will cost               far less than a page with several pages and a store. This tactic allows us to keep the pricing fair as we wont charge you for work we dont do or for work you dont need.</p>
            <p class="price">During these meeting we will also discuss payment plans and the amount to be paid on these set days, these plans include a weekly and monthly payments, the amount to be paid will               depend on the overall price of the project and the plan selected.</p>
        </div>
		
		<div class="priceEstimate">
			<h2 style="font-family: 'Bangers', cursive;">Get a handle on how much your site would cost!</h2>
			<p>Punch in the information and get an instant estimate!</p>
			<p>Please enter all fields!</p>
			<form class="priceCalcForm">
				<p>How many web pages are expected? (If you are unsure, the average value is 3, Home, About, Contact)</p>
				<select class="dropdown" id="page">
					<option class="dropdown" id="drop_1" value="1">1</option>
					<option class="dropdown" id="drop_2" value="2">2</option>
					<option class="dropdown" id="drop_3" value="3">3</option>
					<option class="dropdown" id="drop_4" value="4">4</option> 
					<option class="dropdown" id="drop_5" value="5">5</option> 
					<option class="dropdown" id="drop_6" value="5+">5+</option> 
				</select>
				<p>Is your site going to require a store? (yes or no, if you are unsure select no)</p>
				<select class="dropdown" id="store">
					<option class="dropdown" id="drop_7" value ="1">Yes</option>
					<option class="dropdown" id="drop_8" value ="2">No</option>
				</select>
				<p>Is your store going to require a user database? (yes or no, if you are unsure select no)</p>
				<select class="dropdown" id="database">
					<option class="dropdown" id="drop_9" value="1">Yes</option>
					<option class="dropdown" id="drop_10" value="2">No</option>
				</select><br>
				<div id="finalPrice"></div>
				<button type="button" id="submit" class="btn btn-default" onClick="priceCalc()">Submit</button>
				<button type="button" id="submit" class="btn btn-default" onClick="phpTest()">Test</button>
			</form>
			
			<?php
				function test() {
					echo "This is PHP here!";
				}
			?>
			
		</div>
        
        <div class ="pageFooter">
        	<footer>
            	<p>&copy; 2015 Black Gekko Development</p>
                <button id="disclaimer" class="btn btn-default" onClick="disclaimer()">Disclaimer</button>
            </footer>
        </div>
        
        <script>
			function disclaimer() {
			'use strict'
			alert('All images and content featured on this page belong to Black Gekko Development, if you have questions or comments contact: contact@blackgekkodevelopment.com')	
			}
		</script>
		<script>
			$(document).ready(function() {
				$(".priceCalcForm").submit(function(e) {
					e.preventDefault();
				});
			});
		</script>
	</body>
</html>
