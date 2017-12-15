// var registration_form = document.getElementById("registration_form");
// registration_form.addEventListener ("submit", handleSubmission);


// function handleSubmission(event){

// 	var email_text = registration_form.elements.email_text;
// 	var username_text = registration_form.elements.username_text;
// 	var password_text = registration_form.elements.password_text;
// 	var confirm_text = registration_form.elements.confirm_text;
// 	var age_text= registration_form.elements.age_text;
// 	var priorExp_text = registration_form.elements.priorExp_text;


// 	if (username_text.value.length < 3){
// 		alert("Oops, your username is too short!");
// 		event.preventDefault();
// 		username_text.focus();
// 		return false;
// 	}


// 	if(password_text.value.length < 5){
// 		alert("Please make sure you use at least 5 characters for your password!");
// 		event.preventDefault();
// 		password_text.focus();
// 		return false;
// 	}


// 	if(confirm_text.value != password.value){
// 		alert("Please reconfirm your password.");
// 		event.preventDefault();
// 		confirm_text.focus();
// 		return false;
// 	}

var register_btn = document.querySelector("#register_btn");
register_btn.addEventListener ('click', register);


function register(event){
	var email = document.querySelector("#email").value;
	var password = document.querySelector("#password").value;
	
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(user){

		//add additional data
		var displayName_txt = document.querySelector("#displayName").value;
		var age_txt = document.querySelector("#age").value;
		var priorExp_txt = document.querySelector("#priorExp").value;

		//add in additional information
		user.updateProfile({
			displayName: displayName_txt,
			age: age_txt,
			priorExp: priorExp_txt
		}).then(function() {
			window.location = "index.html";
		}).catch(function(error) {
			var errorCode = error.code;
	  		var errorMessage = error.message;
	  		console.log(errorMessage)
		});

	})

	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  console.log(errorMessage)
	  // ...
	})

	//authentication change
	// firebase.auth().onAuthStateChanged(function(user) {
	//  	if (user) {
	//     	//go to front page
 //   	 		window.location.href = "index.html";
	    
	//   	} else {
	//     	// User is signed out.
 //   	 		window.location.href = "login.html";

	// 	}
	// });


}




