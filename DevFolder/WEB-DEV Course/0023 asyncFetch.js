users = 'https://n161.tech/api/dummyapi/user'

async function fetchAsync () {
  const response = await fetch(users);
  return await response.json();
}

fetchAsync()
	.then(data => console.log(data))
	.catch(reason => console.log(reason.message))

