function tosignup() {					  			
	document.getElementById("mobileLoginUser").classList.add("d-none");
	document.getElementById("userSignUp").classList.remove("d-none");
};

function tologin() {
	document.getElementById("userSignUp").classList.add("d-none");
	document.getElementById("mobileLoginUser").classList.remove("d-none");
};

function redirect(location) {
	window.location.href = location;
};