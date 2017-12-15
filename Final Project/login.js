var login_btn = document.querySelector("#login_btn");
var loginActivate_btn = document.querySelector("#loginActivate_btn");
var registerActivate_btn = document.querySelector("#registerActivate_btn");


function goToLogin(){
	document.querySelector("#loginView").classList.add("active");
	document.querySelector("#buttons").classList.add("hidden");

}


function goToRegister(){
	window.location.href = "register.html";
}

function login(event){
	var email = document.querySelector("#email_txt").value;
	var password = document.querySelector("#password_txt").value;
	console.log ('click ' + email_txt.value)
	
	firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  if (errorCode == 'auth/weak-password') {
	    alert('The password is too weak.');
	  } else {
	    alert(errorMessage);
	  }
	  console.log(error);
	});

};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //go to front page
    window.location = "index.html";
  } else {
    // User is signed out.
    // ...
  }
});


loginActivate_btn.addEventListener('click',goToLogin);
registerActivate_btn.addEventListener('click', goToRegister);
login_btn.addEventListener('click', login);


