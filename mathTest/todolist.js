//ul
var taskList = document.getElementById("taskList");


//text
var newTask_txt = document.getElementById("newTask_txt");


//button
var addItem_btn = document.getElementById("addItem_txt");

function addItem(){
	var inputVal = newTask_txt.value;
	var newListItem = document.createElement('li');
	taskList.appendChild(newListItem);

	newListItem.innerHTML = "<input type = 'text'>" + inputVal;

}


addItem_btn.addEventListener('click', addItem)
