const urls = [
'https://swapi.co/api/people/1',
'https://swapi.co/api/people/2',
'https://swapi.co/api/people/3',
'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(people => people.json())
}))
	.then(array => {
		throw Error;
		console.log(array[0])
		console.log(array[1])
		console.log(array[2])
		console.log(array[3])
	})
	.catch(err => console.log('There is a Bug!', err))
	.finnaly(() => console.log('Welcome!'))