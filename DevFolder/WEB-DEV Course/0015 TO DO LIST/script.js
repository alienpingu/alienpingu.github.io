var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");







function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("X"));
	btn.className= 'delete';
	list.appendChild(li);
	li.appendChild(btn);
	input.value = "";
	toggleCanc();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}

function toggleCanc() {
	var close = document.getElementsByClassName('delete');
	var i;
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}
}

list.addEventListener('click', toggleDone, false);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
toggleCanc();




