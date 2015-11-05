function userAuth() {
	var idNumber = document.getElementById('idNumber').value;
	
	if(idNumber == 2518665) {
		alert('Welcome back, Jeremy');
		var btn = document.createElement("BUTTON");
		var btnText = document.createTextNode("Continue");
		btn.appendChild(btnText);
		btn.setAttribute('id', 'continueButton');
		btn.setAttribute('class', 'btn btn-default');
		document.getElementById('loginField').appendChild(btn);
		document.body.appendChild(btn);
		document.getElementById('loginField').appendChild(btn);
		btn.setAttribute('onclick', location.href='z28.html');
	}
	else if(idNumber == 2490318) {
		alert('Welcome back, Tyler');
		var btn = document.createElement("BUTTON");
		var btnText = document.createTextNode("Continue");
		btn.appendChild(btnText);
		btn.setAttribute('id', 'continueButton');
		btn.setAttribute('class', 'btn btn-default');
		document.getElementById('loginField').appendChild(btn);
		document.body.appendChild(btn);
		document.getElementById('loginField').appendChild(btn);
		btn.setAttribute('onclick', location.href='z28.html');
	}
	else if(idNumber == 2509987) {
		alert('Welcome back, Mollee');
		var btn = document.createElement("BUTTON");
		var btnText = document.createTextNode("Continue");
		btn.appendChild(btnText);
		btn.setAttribute('id', 'continueButton');
		btn.setAttribute('class', 'btn btn-default');
		document.getElementById('loginField').appendChild(btn);
		document.body.appendChild(btn);
		document.getElementById('loginField').appendChild(btn);
		btn.setAttribute('onclick', location.href='z28.html');
	}
	else if(idNumber == null) {
		alert('Please enter your ID');
	}
	else {
		alert('ID number not recognized');
	}
}