const express = require('express');

const server = express();

server.use(express.urlencoded({extended: false}))
server.use(express.json());

server.get('/', (req, res) => {
	res.send('root');
});

server.get('/profile', (req, res) => {
	res.send('get profile');
});

server.post('/profile', (req, res) => {
	console.log(req.body)
	res.send('Success!1!')
});

server.listen(3001);