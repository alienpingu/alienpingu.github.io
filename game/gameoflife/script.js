let $game = document.querySelector('#game');
let $btn = document.querySelector('#generate');

class Game {
    constructor(side) {
        this.side = side;
        this.run = false;
        this.first = false;
        this.near = [-1, -side, side, +1];
        this.new = [-(side-1), -(side+1), (side-1),-(side+1)]
    }

    countNear(actual, arr) {
        let i = 0;
        this.near.forEach(n => {
            if (arr[actual + n] !== undefined && arr[actual + n].classList.contains('live')) {
                i++;
            }})
        return i;
    }
    init(arr) {
        // Set game table visible and set col and row template
        $game.innerHTML = "";
        $game.style.display = 'grid';
        $game.style.gridTemplateColumns = `repeat(${this.side}, auto)`;
        $game.style.gridTemplateRows = `repeat(${this.side}, auto)`;
        for (let i = 0; i < (this.side * this.side); i++) {
            let span = document.createElement("span");
            arr.forEach(n => (n === i) ? span.className = 'live' : null);
            $game.append(span);
        }
    }
    next() {
        let ins = [];
        let arr = document.querySelectorAll('#game span');
        for (let i = 0; i < (this.side * this.side); i++) {
            let n = this.countNear(i, arr)
            if (!arr[i].classList.contains('live') && n === 2) {
                ins.push({
                    cell: i + this.new[Math.floor(Math.random() * this.new.length)],
                    class: 'live'
                })
                ins.push({
                    cell: i + this.new[Math.floor(Math.random() * this.new.length)],
                    class: 'live'
                })
            } else if (arr[i].classList.contains('live') && (n > 3 || n < 2)) {
                ins.push({
                    cell: i,
                    class: 'dead'
                })
            }
        }
        ins.forEach(action => {
            if (arr[action.cell]) {
                arr[action.cell].classList = action.class;
            }
        })
    }
    start(game) {
        (function loop() {
            setTimeout(function () {
                game.next();
                    (game.run) ? loop() : null
            }, 50);
        }());
    }
}

let game = new Game(50);

document.querySelector('#button').addEventListener('click', function(e) {
    if (game.run) {
        game.run = false;
        e.target.innerHTML = 'start';
    } else if (!game.run && !game.first) {
        game.init(Array.from({ length: (game.side * game.side) / 4 }, () => Math.floor(Math.random() * (game.side * game.side))));
        game.run = true;
        game.first = true;
        e.target.innerHTML = 'stop';
        game.start(game);    
    } else {
        game.run = true;
        e.target.innerHTML = 'stop';
        game.start(game);
    }
});
