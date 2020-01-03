const input = [1,2,3,4,5,6,7,8,9,15,55,123545]
/*Dati numeri casuali come input la funzione deve rilevere i numeri divisibili per:
		-3  -> in tal caso la funzione sostituisce il valore con Fizz
		-5 	-> in tal caso la funzione sostituisce il valore con Buzz
		-15 -> in tal caso la funzione sostituisce il valore con FizzBuzz
	*/

FizzBuzzFunc = (array) => {
	let output = []
	const rule = [[15, 'FizzBuzz'], [5, 'Buzz'], [3, 'Fizz']];
	array.map(n => {
		rule.map(c => {
			if (n % c[0] == 0) { /*Se il valore target della lista è divisibile per c[0] primo valore della sottolista*/
				n = c[1];
			}
		});
		output.push(n);
	})
	output.map(e => {console.log(e)})
}

console.time('time');
FizzBuzzFunc(input);
console.timeEnd('time');


