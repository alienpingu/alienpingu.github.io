// Variabili per giocatori
let player1 = {
    "id": 0,
    "points": 0,
    "name": "player1"
}

let player2 = {
    "id": 1,
    "points": 0,
    "name": "player2"
}

let gameHistory = []
// dizionario per sostituzione di valore di punti in descrizione
let dict = [
    {
        value: 0,
        name: "love"
    },
    {
        value: 1,
        name: "fifteen"
    },
    {
        value: 2,
        name: "thirty"
    },
    {
        value: 3,
        name: "forty"
    }
]

// Ritorna un numero casuale tra 0 e 1 per dichiarare un vincitore casuale
randomWinner = () => (Math.floor(Math.random() * (1 - 0 + 1)) + 0) ? player1.points++ : player2.points++

// Converti il punteggio dal numero a la parola: 0,1,2,3 a “love”, “fifteen”, “thirty”, and “forty”
function convertPoints(numberPoints) {
    let res = '';
    for (let i = 0; i < dict.length; i++) {
        (numberPoints === dict[i].value) ? res = dict[i].name : null
    }
    return(res);
}
// Controlla se un giocatore ha superato 3 punti e controlla il vantaggio
// 0 - p1 vantaggio
// 1 - p2 vantaggio
checkMatchPoint = () => (player1.points === player2.points+1 ) ? 0 : (player1.points+1 === player2.points) ? 1 : null
// Controlla se uno dei due giocatori ha vinto
checkWinner = () => (player1.points >= player2.points+2  ) ? 0 : (player1.points+2 <= player2.points  ) ? 1 : null
// 0 - p1 win 
// 1 - p2 win 
// Populate DOM table
renderTable = (history) => {
    history.forEach(e => {
        let {round, player1, player2} = e;
        let row = document.getElementById('report_table').insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = round;
        cell2.innerHTML = player1;
        cell3.innerHTML = player2;
    });
}
// ----------------------------------------------------------------------------------------------------------
// Main 
let game = true;
let round = 1;
while(game) {

    randomWinner();
    let roundHistory = {
        round: round,
        player1: '',
        player2: '',
    }

    // Converti il punteggio
    if (player1.points < 4) {
        roundHistory.player1 = convertPoints(player1.points) 
    }
    if (player2.points < 4) {
        roundHistory.player2 = convertPoints(player2.points) 
    }
    // Controlla chi è in vantaggio
    if (player1.points >= 4 && checkMatchPoint() === 0) {
        roundHistory.player1 = 'vantaggio'
    }
    if (player2.points >= 4 && checkMatchPoint() === 1) {
        roundHistory.player2 = 'vantaggio'
    }
    // Controlla il pareggio    
    if  (player1.points >= 4 && player1.points === player2.points) {
        roundHistory.player1 = 'pareggio';
        roundHistory.player2 = 'pareggio';
    }
    // Controlla se un giocatore ha vinto
    if (player1.points >= 4 && checkWinner() === 0) {
        roundHistory.player1 = 'WIN';
    }
    if (player2.points >= 4 && checkWinner() === 1) {
        roundHistory.player2 = 'WIN';
    }
    gameHistory.push(roundHistory);
    
    if (player1.points >= 4 && checkWinner() === 0 || player2.points >= 4 && checkWinner() === 1) {
        game = false;
    }
    
    round++;


}

renderTable(gameHistory);