// Credenziali di accesso
var database = 
[
	{
	username: "samu",
	password: "123",
	}
];


//Contenuti bacheca
newsfeed = [
{
	username: "Jhon",
	timeline: "Ciao a tutti!",
},
{
	username: "Max",
	timeline: "Che bella giornata",
},
{
	username: "Sara",
	timeline: "Amo i gatti",
},
];

var usernamePrompt = prompt("Qual il tuo username?");
var passwordPrompt = prompt("Qua la tua password?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsfeed);
	}
	else {
		alert("Username e password errati")
	}

}

signIn(usernamePrompt, passwordPrompt);