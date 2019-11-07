loadBk();
var botNav = document.getElementsByClassName('bottomBar')[0];
botNav.addEventListener("touchstart", startTouch, false);
botNav.addEventListener("touchmove", moveTouch, false);


// Per ogni pulsante categoria aggiungi un listener per il doppio click
// Quando viene doppiocliccato rende il contenuto editable
for (item of $('button')) {
item.addEventListener('dblclick', (e) => { 
	
	if (e.target.isContentEditable) {
		e.target.setAttribute('contenteditable', 'true');
	} else {
		e.target.setAttribute('contenteditable', 'false');
	}
})};


(function()
{

	//exclude older browsers by the features we need them to support
	//and legacy opera explicitly so we don't waste time on a dead browser
	if
	(
		!document.querySelectorAll 
		|| 
		!('draggable' in document.createElement('span')) 
		|| 
		window.opera
	) 
	{ return; }
	
	//get the collection of draggable items and add their draggable attribute
	for(var 
		items = document.querySelectorAll('[data-draggable="item"]'), 
		len = items.length, 
		i = 0; i < len; i ++)
	{
		items[i].setAttribute('draggable', 'true');
	}

	//variable for storing the dragging item reference 
	//this will avoid the need to define any transfer data 
	//which means that the elements don't need to have IDs 
	var item = null;

	//dragstart event to initiate mouse dragging
	document.addEventListener('dragstart', function(e)
	{
		//set the item reference to this element
		item = e.target;
		
		//we don't need the transfer data, but we have to define something
		//otherwise the drop action won't work at all in firefox
		//most browsers support the proper mime-type syntax, eg. "text/plain"
		//but we have to use this incorrect syntax for the benefit of IE10+
		e.dataTransfer.setData('text', '');
	
	}, false);

	//dragover event to allow the drag by preventing its default
	//ie. the default action of an element is not to allow dragging 
	document.addEventListener('dragover', function(e)
	{
		if(item)
		{
			e.preventDefault();
		}
	
	}, false);	

	//drop event to allow the element to be dropped into valid targets
	document.addEventListener('drop', function(e)
	{
		//if this element is a drop target, move the item here 
		//then prevent default to allow the action (same as dragover)
		if(e.target.getAttribute('data-draggable') == 'target')
		{
			e.target.appendChild(item);
			e.preventDefault();
		}
		//Se l' elemento viene rilasciato btn item viene aggiunto
		//all' elemento successivo
		else if(e.target.classList.contains('btn')) {
			e.target.nextElementSibling.appendChild(item);
			e.preventDefault();
		}
		saveBk();
	}, false);
	
	//dragend event to clean-up after drop or abort
	//which fires whether or not the drop target was valid
	document.addEventListener('dragend', function(e)
	{
		item = null;
	
	}, false);

})();	


function dSwitch(y) 
{	var x = document.getElementById('categoria' + y);
	if (x.classList == 'd-none') 
	{
		x.classList.remove('d-none');
	} else 
	{
		x.classList.add('d-none');
	}
}



// Aggiungi Categoria
function addCategoria() {
	var n = 0;
	for (item of $('[data-draggable="target"]')) {n = n + 1;}
	var x = `<button class= 'btn btn-block btn-primary' onclick='dSwitch(${n})'>categoria${n}</button><ol id='categoria${n}' class='d-none' data-draggable='target'></ol>`
	$('div')[0].innerHTML+= x;
	saveBk();
}

// LocalBackupSys
function saveBk() {
	localStorage.container = $('div.container')[0].innerHTML;
	localStorage.all = $('#categoria0')[0].innerHTML;
}
function loadBk() {
	$('div.container')[0].innerHTML += localStorage.container;
	for (item of $('ol')) {
		item.classList.add('d-none');
	}
	$('#categoria0')[0].innerHTML += localStorage.all;
	
}



// Swipe
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
	initialX = e.touches[0].clientX;
	initialY = e.touches[0].clientY;
};

function moveTouch(e) {
	if (initialX === null) {
		return;
	}

	if (initialY === null) {
		return;
	}

	var currentX = e.touches[0].clientX;
	var currentY = e.touches[0].clientY;

	var diffX = initialX - currentX;
	var diffY = initialY - currentY;

	if (Math.abs(diffX) > Math.abs(diffY)) {
		// sliding horizontally
		if (diffX > 0) {
		// swiped left
			console.log("swiped left");
		} else {
		// swiped right
			console.log("swiped right");
		} 
		} else {
		// sliding vertically
		if (diffY > 0) {
		// swiped up
			console.log("swiped up");
			dSwitch(5);
		} 
		else {
		// swiped down
			console.log("swiped down");
			dSwitch(5);
		} 
	}

initialX = null;
initialY = null;
e.preventDefault();
};


//Una volta cliccato il pulsate url caricato dal form viene utilizzato per generare un elemento
//img nel div delle non categorizzate 
$("#imageupload").on('change', function () {
 
	var countFiles = $(this)[0].files.length;

	var imgPath = $(this)[0].value;
	var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
	var image_holder = $("#categoria0");
	// image_holder.empty();
 
	if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        if (typeof (FileReader) != "undefined") {
 
            for (var i = 0; i < countFiles; i++) {
 
                var reader = new FileReader();
                reader.onload = function (e) {
					$("<img/>", 
                    {
                        "data-draggable": "item",
                     	"src": e.target.result,
                    }).appendTo(image_holder);
                }
 				
                image_holder.show();
                reader.readAsDataURL($(this)[0].files[i]);
            }
 
        } else {
            alert("It doesn't supports");
        }
    } else {
        alert("Select Only images");
    }
    saveBk();
});