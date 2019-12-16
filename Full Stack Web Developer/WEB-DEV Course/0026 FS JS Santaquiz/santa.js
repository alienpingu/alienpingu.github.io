const fs = require('fs');
let floor = 0;
console.time('Timer: ');

fs.readFile('./quiz.txt', (err, data) => {
	if (err) {
		console.log(err);
	}
	const quiz = data.toString('utf8');
	for (const char of quiz) {
		if (char == '(') {
			floor = floor + 1;
		} else {
			floor = floor - 1;
		}
	}
	console.log('Parents floor: ' ,floor);
	console.timeEnd('Timer: ');
})

