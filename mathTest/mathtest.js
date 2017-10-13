//UI-Buttons

var checkAnswer_btn = document.getElementById ('checkAnswer');
var nextProblem_btn = document.getElementById ('nextProblem');

checkAnswer_btn.addEventListener('click',checkSum);



//UI-Input 
var sum_txt = document.getElementById ('sum');


//UI-Value 
var var1_ele = document.getElementById('val1');
var var2_ele = document.getElementById('val2');

//Create random value

var val1 = Math.floor(Math.random()*100);
var val2 = Math.floor(Math.random()*100);

var1_ele.innerHTML = val1;
var2_ele.innerHTML = val2;

function checkSum(){

	var correctVal = var1 + var2;
	var userAnswer = sum_txt.value;

	if (correctVal == userAnswer) {
		alert (" Well done!!!")
		resetValues();
	} else  {
		alert ( "Think again...")
		sum_txt.focus();
	} 
}




function resetValues(){

checkAnswer_btn.addEventListener('click',checkSum);
nextProblem_btn.addEventListener('click',resetValues);

}