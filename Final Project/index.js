var message_ele = document.getElementById("message");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //username.innerHTML = user.displayName;

    userId = user.uid;
     console.log(user.displayName)
    message_ele.innerHTML = user.displayName;
  } else {
    // No user is signed in.
    window.location = "login.html";
  }
});

var signOut_btn = document.getElementById("signOut");
signOut_btn.addEventListener ('click', signOut);


function signOut(){
  firebase.auth().signOut()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  })
  .then(function(){
    window.location = "login.html";
  });
}
