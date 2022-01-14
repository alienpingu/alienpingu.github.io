
//Crea un codice HEX casuale
let todayColor = '#'+Math.floor(Math.random()*16777215).toString(16)
//Usa NameThatColor per dare un nome al codice HEX
var n_match = ntc.name(todayColor);
let n_name = n_match[1];
//Controlla se il collore è chiaro:
// true -> chiaro
// falso -> scuro
function wc_hex_is_light(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 100;
}


//Se il colore è scuro il testo deve esser chiaro
if (!wc_hex_is_light(todayColor)) {
	document.querySelector('#main #color').style.color = 'white'
}
//Attribuisci il colore allo sfondo
document.querySelector('#main').style.background = todayColor
//Attribuisci il nome del colore al titolo
document.querySelector('#main #color').innerText = n_name
