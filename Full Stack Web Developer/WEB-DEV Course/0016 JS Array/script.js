// Advanced Array 
const array = [1,3,5,10];

//For Each
// Esegue l' operazione sul valore dell' array per poi passare al sucessivo senza output
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2)
})
console.log('forEach',double);

// map
// Esegue l' operazione sul valore dell' array per poi passare al sucessivo, trasformando l' arry
// usando map si effetua una programmazione più pulita oltre ad esser proprio più compatta

// const mapArray = array.map((num) =>{
// 	return num * 2;
// })

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);


// Filter
// Agisce come un filtro normalissimo trasformano l'array
const filterArray = array.filter(num =>num > 5);
console.log('filter', filterArray);

// reduce
// filter + map 
//accumulator (aka. acc) è qualcosa dove si possono memorizzare le informazioni che si
// verificano nel corpo della funzione
const reduceArray = array.reduce((accumulator,num) => {
	return accumulator + num 
}, 0) // Lo zero definisce il valore iniziale dell' accumulator
console.log('reduce', reduceArray);