/* ============================== log in validitation ============================== */

function loginCheck(checkEmail, checkPass) {
for(let i = 0; i < users.length; i++) {
		if(users[i].email === checkEmail && users[i].password === checkPass) {
			console.log("User found!");
			window.location.href = "./templates/misc/index.html";
			return true;
		} else {
			console.log("invalid login!");
			return false;
		}
	}
}

/* ================================================================================= */


let loginForm = document.getElementById("loginUser");

loginForm.addEventListener('submit', function(event) {
	let mail = loginForm.loginEmail.value;
	let pass = loginForm.loginPassword.value;

	let validUser = loginCheck(mail, pass);

	if (validUser === true) {
		let transfer = redirect("./templates/misc/index.html");
		alert("Welcome back");
		return transfer;
	} else {
		alert("invalid email and password");
	}
})


/* ================================ mobile login form ===============================*/


let mobileLoginForm = document.getElementById("mobileLoginUser");

mobileLoginForm.addEventListener('submit', function(event) {
	let mobMail = mobileLoginForm.mobLoginEmail.value;
	let mobPass = mobileLoginForm.mobLoginPassword.value;

	let validMobUser = loginCheck(mobMail, mobPass);

	if (validMobUser === true) {
		window.location.href = "./templates/misc/index.html";
		alert("Welcome back");
	} else {
		alert("invalid email and password");
	}
})