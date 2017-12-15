var player6 = document.getElementById("player6");
var player5 = document.getElementById("player5");
var player4 = document.getElementById("player4");
var player3 = document.getElementById("player3");
var player2 = document.getElementById("player2");
var modal = document.getElementById("modal");
var close_btn = document.getElementById("close_btn");

player6.addEventListener('click', function(event){
  modal.classList.remove("hidden");
  panel.classList.remove("hidden");
  panel1.classList.remove("hidden");
  panel2.classList.add("hidden");
  panel3.classList.add("hidden");

});

player5.addEventListener('click', function(event){
  modal.classList.remove("hidden");
  panel.classList.remove("hidden");
  panel1.classList.remove("hidden");
  panel2.classList.add("hidden");
  panel3.classList.add("hidden");
});

player4.addEventListener('click', function(event){
  modal.classList.remove("hidden");
  panel.classList.remove("hidden");
  panel1.classList.remove("hidden");
  panel2.classList.add("hidden");
  panel3.classList.add("hidden");
});

player3.addEventListener('click', function(event){
  modal.classList.remove("hidden");
  panel.classList.remove("hidden");
  panel3.classList.remove("hidden");
  panel1.classList.add("hidden");
  panel2.classList.add("hidden");
});

player2.addEventListener('click', function(event){
  modal.classList.remove("hidden");
  panel.classList.remove("hidden");
  panel2.classList.remove("hidden");
  panel1.classList.add("hidden");
  panel3.classList.add("hidden");
});

close_btn.addEventListener('click', function(event){
   modal.classList.add("hidden");
   panel.classList.add("hidden");
});




// var message =  parse_query_string.username_text;
// var message_ele = document.getElementById("message");
// message_ele.innerHTML = message;