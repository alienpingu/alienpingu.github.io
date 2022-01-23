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



//Vinci il gioco
let winGame = () => {
	values.sort((a, b) => a - b)
	let c = 0
	//Randomizza le caselle di gioco
	for (var key in data) {
	    data[key].value = values[c];
	    let item = document.getElementById(key)
	    item.innerText = data[key].value;
	    (values[c] === ' ') ? empty = key : null;
	    c++;
	}
}
	

//Una volta che è carica la pagina aggiungi i click
window.addEventListener('load', (event) => {

	startGame()


  for (var key in data) {
	    let item = document.getElementById(key)
	    item.addEventListener('click', function(e){
			moveItem(e);
		});
	}
});

