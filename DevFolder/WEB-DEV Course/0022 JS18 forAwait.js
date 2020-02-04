const urls = [
'https://swapi.co/api/people/1',
'https://swapi.co/api/people/2',
'https://swapi.co/api/people/3',
'https://swapi.co/api/people/4'
]

const getData = async function() {
	const arrayOfPromises = urls.map( url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data);
	}
}