const express = require('express');

const app = express();

// Response of text/html
app.get('/', (req, res) => {
	res.send('<h1>Hello!</h1>')
});

// Response of JSON
app.get('/user', (req, res) => {
	const user = {
		name: 'Samu',
		city: 'Milan'
	}
	res.send(user);
});

app.listen(3000);