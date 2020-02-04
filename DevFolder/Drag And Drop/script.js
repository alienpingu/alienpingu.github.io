loadBk();
DraNDro();

function DraNDro()
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

};	

// Aggiungi Categoria
function addCategoria() {
	// Crea un pulsante con sottostante categoria con nome 'categoria' + numero (estetico)
	var n = 0; 
	for (item of $('[data-draggable="target"]')) {n = n + 1;}
	var htmlWall = `<button class= 'btn btn-block btn-primary'>categoria${n}</button><ol class='d-none' data-draggable='target'></ol>`
	$('div.bk')[0].innerHTML+= htmlWall;
	//Cliccando il pulsante categoria, quest' ultima verra mostrata / nascosta
	$('button').on('click', Clk);
	DbClickListener();
	saveBk();
}
// LocalBackupSys
function saveBk() {
	localStorage.bk = $('div.bk')[0].innerHTML;
	localStorage.tutte = $('#categoria0')[0].innerHTML;
	console.log('backup effettuato')
}
function loadBk() {
	if (localStorage.bk == undefined) {localStorage.bk = "";}
	else {$('div.bk')[0].innerHTML += localStorage.bk;}
	
	if (localStorage.tutte == undefined) {localStorage.tutte = "";}
	else {$('#categoria0')[0].innerHTML += localStorage.tutte;}}
	


//Una volta cliccato il pulsate url caricato dal form viene utilizzato per generare un elemento
//img nel div delle non categorizzate 
$("#imageupload").on('change', function () {
 
	var countFiles = $(this)[0].files.length;

	var imgPath = $(this)[0].value;
	var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
	var image_holder = $("#categoria0");
 
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
            DraNDro();
 			saveBk();
        } else {
            alert("It doesn't supports");
        }
    } else {
        alert("Select Only images");
    }
    
});



//Cliccando il pulsante categoria, quest' ultima verra mostrata / nascosta
function Clk() {this.nextElementSibling.classList.toggle('d-none');console.log('click')}
$('button').on('click', Clk);

// Rende editabile il contenuto del bottone doppiocliccato
DbClickListener = () => {$('button').on('dblclick',function() {
	this.contentEditable = "true";
	$('button').off('click', Clk);
	console.log('on');
});}
DbClickListener();

// Premendo il tasto enter si esce dalla modalità editing
$('button').on('keyup', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		$('button').on('click', Clk);
		this.contentEditable = "false";
		saveBk();
}});