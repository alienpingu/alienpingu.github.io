const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controller/Register');
const login = require('./controller/Login')

const db = knex({
	client:'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'password',
		database: 'face-recon'
	}
});
/*	Print all user in users table
db.select('*').from('users').then(data => console.log(data));
*/
const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
	users: [
		{
			id: 123,
			name: 'John',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
		{
			id: 124,
			name: 'Mary',
			email: 'mary@gmail.com',
			password: 'bananas',
			entries: 0,
			joined: new Date()
		}
	]
}

app.get ('/', (req, res) => {
	res.json('App is running')
})

app.post('/login', (req, res) => {login.handleLogin(req, res, db, bcrypt)})

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	db.select('*').from('users').where({id})
		.then(user => {
			if (user.length) {
				res.json(user[0])
			} else {
				res.status(400).json('Not found')
			}
		}).catch(err => ers.status(400).json('Error getting user'))
})

app.put('/image', (req, res) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
		.increment('entries', 1)
		.returning('entries')
		.then(entries => {
			res.json(entries[0])
		})
		.catch(err => res.status(400).json('unable to get entries'))
	
})

app.listen(3001, () => {
	console.log('App is running on port 3001')
});