//Dati di gioco
let data = {
	a: {
		value: null,
		interaction: ['c', 'd']
	},
	b: {
		value: null,
		interaction: ['c', 'f']
	},
	c: {
		value: null,
		interaction: ['a', 'b', 'g']
	},
	d: {
		value: null,
		interaction: ['a', 'e', 'g']
	},
	e: {
		value: null,
		interaction: ['d', 'h']
	},
	f: {
		value: null,
		interaction: ['b', 'i']
	},
	g: {
		value: null,
		interaction: ['c', 'd', 'l', 'm']
	},
	h: {
		value: null,
		interaction: ['e','n']
	},
	i: {
		value: null,
		interaction: ['f','l']
	},
	l: {
		value: null,
		interaction: ['g', 'o', 'i']
	},
	m: {
		value: null,
		interaction: ['g', 'n','o']
	},
	n: {
		value: null,
		interaction: ['h', 'm']
	},
	o: {
		value: null,interaction: ['l', 'm']
	},
}
let win_data = {
	a: {
		value: 12,
		interaction: ['c', 'd']
	},
	b: {
		value: 10,
		interaction: ['c', 'f']
	},
	c: {
		value: 11,
		interaction: ['a', 'b', 'g']
	},
	d: {
		value: 1,
		interaction: ['a', 'e', 'g']
	},
	e: {
		value: 2,
		interaction: ['d', 'h']
	},
	f: {
		value: 9,
		interaction: ['b', 'i']
	},
	g: {
		value: ' ',
		interaction: ['c', 'd', 'l', 'm']
	},
	h: {
		value: 3,
		interaction: ['e','n']
	},
	i: {
		value: 8,
		interaction: ['f','l']
	},
	l: {
		value: 7,
		interaction: ['g', 'o', 'i']
	},
	m: {
		value: 5,
		interaction: ['g', 'n','o']
	},
	n: {
		value: 4,
		interaction: ['h', 'm']
	},
	o: {
		value: 6,interaction: ['l', 'm']
	}
}
//Valori delle caselle
var values = [1,2,3,4,5,6,7,8,9,10,11,12,' ']
//Variabile per tenere memoria della casella vuota
let empty = undefined
//Funzione per randomizzare un array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
//Funzione che scambia sia gli elementi in DOM che nell'oggetto 'data'
let moveItem = (e) => {
	data[e.target.id].interaction.forEach((value, index) => {
		if (value === empty) {
			document.getElementById(empty).innerText = e.target.innerText;
			data[empty].value = e.target.innerText;
			e.target.innerText = ' ';
			data[e.target.id].value = ' ';
			empty = e.target.id;
		}
	});
	checkEnd()
}
//inizia il gioco 
let startGame = () => {
	//Crea nuovo array casuale
	let randomArray = shuffleArray(values)
	//Contatore
	let c = 0
	//Randomizza le caselle di gioco
	for (var key in data) {
	    data[key].value = randomArray[c];
	    let item = document.getElementById(key)
	    item.innerText = data[key].value;
	    (randomArray[c] === ' ') ? empty = key : null;
	    c++;
	}
}

let checkEnd = () =>{
	if (data === win_data) {
		document.getElementById('win_banner').style.display = 'flex';
	}
}

let showInfoDisplay = () => {
	document.getElementById('info_banner').style.display = 'flex'
}

let hideInfoDisplay = () => {
	document.getElementById('info_banner').style.display = 'none'
}

//Vinci il gioco
let winGame = () => {
	data = win_data
  	for (var key in data) {
	    let item = document.getElementById(key)
	    item.innerText = data[key].value
	}
	empty = 'g'
}
	

//Una volta che è carica la pagina aggiungi i click
window.addEventListener('load', (event) => {

	startGame()
	document.querySelector('#icon_wrapper img').addEventListener('click', function(e){
		showInfoDisplay()
	})
	document.getElementById('info_banner').addEventListener('click', (e) => hideInfoDisplay())

  for (var key in data) {
	    let item = document.getElementById(key)
	    item.addEventListener('click', function(e){
			moveItem(e);
		});
	}
});

