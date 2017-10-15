var btnDealerHand = document.getElementById("btnDealerHand");

btnDealerHand.addEventListener("click",dealerHand);


var dealerHand =  function(){

	var max = 21;
	var min = 17;
	var random = Math.random() * (max - min +1) + min; //get a random value between 0 and 1
	return Math.floor(random);	//get integer instead of desimal
	document.getElementById ("dealerHandResult").innerHTML = Math.floor(random);
}

var deal = function(){
	var card = Math.floor(Math.random() * 52 + 1);
	return card;
	console.log("nervous")

}

var playerHand = []; 
playerHand [0] = deal();
playerHand [1] = deal();




var getValue = function(card){
	// face cards
	if ((card % 13 == 0) || (card % 13 == 11) || (card % 13 == 12)){
		return 10
	} else {
		if (card % 13 == 1){
		return 11
		} else {
		return card % 13
		}
	}

}


var score = function (){
	var handSum = 0;
	for (var i=0; i< playerHand.length; i++){
		handSum += getValue(playerHand[i])
	}
	if (handSum > 21){
		alert(handSum + "YOU ARE BUSTED!");
	}
	return handSum;
}



function hit() {
	playerHand.push(deal());
	score();
	console.log("good luck")

}

function stand(){

	var playerScore = score();
	var dealerScore = dealerHand();

	if (playerScore > dealerScore) {
		alert (playerScore + " YOU WIN!!!")
	} else if (playerScore < dealerScore) {
		alert ( "YOU GOT " + playerScore + " DEALER GOT " + dealerScore +" YOU LOSE...")
	} else {
		alert ("YOU BOTH GOT " + playerScore);
	}
}

console.log (dealerHand());

