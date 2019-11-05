loadBk();
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
			saveBk();
		}
	
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
	var n = Number(localStorage.catNum);
	var x = `<button class= 'btn btn-block btn-primary' onclick='dSwitch(${n})'>categoria${n}</button><ol id='categoria${n}' class='d-none' data-draggable='target'></ol>`
	$('div')[0].innerHTML+= x;
	saveBk();
	localStorage.catNum = n + 1;
}

// LocalBackupSys
function saveBk() {
	localStorage.bk = $('div.container')[0].innerHTML;
}
function loadBk() {
	if (localStorage.bk) {
		$('div')[0].innerHTML = localStorage.bk;
		for (item of document.querySelectorAll('ol')) {
			item.classList.add('d-none');
		}
	}
}



