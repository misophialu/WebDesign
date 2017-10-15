/* Questions for this exercise:
1. How to use debugger? Can't find it;
2. Please clairfy id vs. name
3. What is the difference between using label vs. text directly?
4. Can't get the validation working... (even your code on github, the validation is not working on my end)
5. When I hit "enter" key instead of hit the button, the form automaticlly submits. 

*/


// var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var months =["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

// var dformat = d.toLocaleTimeString();
// var dbold =  dformat.bold();
// var partystart = new Date(2017,10,31,18,45,00,0);
// var partyfinish = new Date(2017,10,31,20,30,00,0);

var d = new Date();
var var1_ele = document.getElementById('var1');
var var2_ele = document.getElementById('var2');
var var3_ele = document.getElementById('var3');



var var1 = 30 - d.getDate();
var var2 = 18 - d.getHours();
var var3 = 60 - d.getMinutes();



function resetValues(){

	var1 = d.getDate();
	var2 = d.getHours();
	var3 = d.getMinutes();

	//insert values into the <span> tags
	var1_ele.innerHTML = var1;
	var2_ele.innerHTML = var2;
	var3_ele.innerHTML = var3;
}


checktime.addEventListener ("click", resetValues);

var registration_form = document.getElementById("registration_form");
registration_form.addEventListener ("submit", handleSubmission);


function handleSubmission(event){


	/*store variable of all the elements inside the form*/

	var username = registration_form.elements.username;
	var password = registration_form.elements.password;
	var confirm = registration_form.elements.confirm;
	var code = registration_form.elements.code;
	var costume = registration_form.elements.costume;
	var bring = registration_form.elements.bring;


	if (username.value.length < 3){
		alert("Come on, a username with less than 3 characters! Do you really want to come to the party or not?");
		event.preventDefault();
		username.focus();
		return false;
	}


	if(password.value.length < 5){
		alert("Please make sure you use at least 5 characters for your password!");
		event.preventDefault();
		password.focus();
		return false;
	}


	if(confirm.value != password.value){
		alert("Dude, if you can't get your password right, you are not going to make to the party.");
		event.preventDefault();
		confirm.focus();
		return false;
	}

	if(code.value != "AB"){
		alert("Hmmm.... Did you forget to capitalize? Or you are not really one of us....");
		event.preventDefault();
		code.focus();
		return false;
	}

	if(costume.value != "yes"){
		alert("How could you not prepare for a costume but want to come to a Halloween party?!");
		event.preventDefault();
		code.focus();
		return false;
	}

	/*push any bring item that was checked into an array*/

	var bringArray = [];

	for(var i=0; i< bring.length; i++){
		if(bring[i].checked){
			bringArray.push(bring[i].value);
		} else {
		}
	}

	if(bringArray.length == 0 ){
		alert("Not planning to bring anything??? Stingy people are not welcomed!");
		event.preventDefault();
		return false;
	}

 }








