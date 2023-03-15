
let users = [];
let userId = 0;

function User(id, firstName, lastName, email, password, birthMonth, birthDay, birthYear, gender){
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.birthMonth = birthMonth;
	this.birthDay = birthDay;
	this.birthYear = birthYear
	this.gender = gender
}

let admin = new User(1, "John Joseph", "Obligado", "obligado86@yahoo.com", "12345", "may", 15, 1992, "male");
console.log(users.push(admin));

/* ============================================ sign up Validitation =========================================*/

function signinCheck(signinEmail, signinFirstName, signinLastName) {
for(let i = 0; i < users.length; i++) {
		if(users[i].email === signinEmail && users[i].firstName === signinFirstName && users[i].lastName === signinLastName) {
			console.log("email already registered!");
			return true;
		} else {
			console.log("registered Successfully!");
			return false;
		}
	}
}

/* =========================================== New user constructor =========================================== */

function userConstruction(userfirstName, userlastName, useremail, userpassword, userbirthMonth, userbirthDay, userbirthYear, usergender) {
	let newId = users.length + 1;
	let userAccount = new User(newId, userfirstName, userlastName, useremail, userpassword, userbirthMonth, userbirthDay, userbirthYear, usergender);
	users.push(userAccount);
	alert("Thank you for signing up! You can now log in with your user email and password");
}

/* ============================================================================================================ */


let signUpForm = document.getElementById("userSignUp");

signUpForm.addEventListener('submit', function(event) {
	event.preventDefault();
		let inputfirstName = signUpForm.firstName.value;
		let inputlastName = signUpForm.lastName.value;
		let inputemail = signUpForm.email.value;
		let inputpassword = signUpForm.password.value;
		let inputbirthMonth = signUpForm.birthMonth.value;
		let inputbirthDay = signUpForm.birthDay.value;
		let inputbirthYear = signUpForm.birthYear.value;
		let inputgender = signUpForm.gender.value;

		let infoCheck = signinCheck(inputemail, inputfirstName, inputlastName);

		if (infoCheck === true) {
			alert("Your email is already been registered!");

		} else {
			let newUser = userConstruction(inputfirstName, inputlastName, inputemail, inputpassword, inputbirthMonth, inputbirthDay, inputbirthYear, inputgender);
			return newUser;
		}	
});