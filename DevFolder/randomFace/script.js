document.querySelectorAll('.btn').forEach(item =>{
	item.addEventListener('click', event => {
	  console.log(event.target.id);
	  event.target.classList.remove('btn-secondary');
	  event.target.classList.add('btn-primary');

	})
});

async function getFace() {
	let response = await fetch('https://api.generated.photos/api/v1/faces?per_page=1&order_by=random',{
    method: 'GET',
    headers: {
      'Authorization': 'API-Key UTzwqJvmIJngGBxC0M3ORw'
    }

	});
let result = await response.json();
document.getElementById("myImg").src = result.faces[0].urls[4]["512"];
}

getFace()