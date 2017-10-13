/* When call JS from BTN directly, 
no need to set var for element, 
because HTML already know what action and target it refers to
but this makes hmtl not that neat
*/
function sayHello(){
	console.log("Hello - Call JS from Button");
}



/* When call from JS, 
we need to 
1) in HTML - label the target in html by using ID,
2) in JS - a) define the "subject" , which is a new var to refer to that html target,
i.e. var myTargetElement = document.getElementById("htmlID");
b) in JS - b) define the "verb" and "object", which is by doing what action, what would happen
i.e. myTargetElement.addEventListener("action", functionName)
You can define the function in that line, or define the function seperately 
*/


var myBtnElement = document.getElementById("myBtn");

// myBtnElement.addEventListener("click",function(){
// 	console.log("Bye - Call from JS");
// });

myBtnElement.addEventListener("click",sayBye);
function sayBye(){
	console.log("Bye - Call from JS");
}


/* innerHTML is to insert content defined in JS to an existing div in HMTL;
the addEventListener applies to the trigger target (e.g.the button),
and the fuction applies to the result target (e.g. the div);
The addEventListener still applies to the trigger; the result is part of the function, not the trigger.
*/
var messageElement = document.getElementById("messageBox");

myBtnElement.addEventListener("click",sayMessage);

function sayMessage(){
	messageElement.innerHTML = "Here is the message.";
}


//document.createElement(element);
//document.createTextNode(text);
//parent.appenedChild(node);
//parent.removeChild(node);
//parent.insertBefore(node);

//element.innerHTML = "some_HTML"
//element.textContent = "some_text"


var rainbowColors = ["red","orange","yellow","green", "indigo", "blue","purple"]

var myContent = document.getElementById("content");
var myHeader = document.getElementById("pageHeader");
var mySubtitle = document.getElementById("pageSubtitle");

myHeader.textContent = "Rainbow Colors";
mySubtitle.innerHTML = "Which one is <em>your</em> <strong>favorite</strong> color?";

/*

<div id = "content">
	<header> pageHeader </header>
	<subtitle> pageHeader </subtitle>
	<ul>
		<li>color text</li>
		<li>color text</li>
		<li>color text</li>
	</ul>
</div>

To add the list part under subtitle, we need to create three layers:
1. color text (colorText)
2. li (colorItem)
3. ul (colorList)
This means we need to define 3 new variables.

The colorList and colorItem are the wrap layer, so we use document.createElement;
While the colorText is text itself, so we use document.createTextNode;
to put text inside of the li, and li inside of the ul, and ul inside of the content div we use appendChild

FOR loop for(three elements){what happens}
Three elements:
1. starting point : var i=0
2. range: i < array.length
3. incremental: i++

What happens:
define new var, action etc.

*/

var colorList = document.createElement("ul");
for(var i=0; i < rainbowColors.length; i++){
	var colorItem = document.createElement("li");
	var colorText = document.createTextNode(rainbowColors[i]);
	colorItem.appendChild(colorText);
	colorList.appendChild(colorItem);
}

content.appendChild(colorList);








