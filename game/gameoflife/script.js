let side = document.querySelector('#side').value;
let $game = document.querySelector('#game');
let $btn = document.querySelector('#generate');

function getNumberOfNearLiveCell(actual, arr) {
    let i = 0;
    [11,-11,9,-1,-10,9,-9, 10,+1].forEach(n => {
        if (
            arr[actual + n] !== undefined &&
            arr[actual + n].classList.contains('live')) {
            i++;
        }
    })
    return i;
}

function next() {
    let ins = [];
    let arr = document.querySelectorAll('#game span');
    for (let i = 0; i < (side * side); i++) {
        let n = getNumberOfNearLiveCell(i, arr)
        if (n === 3 && !arr[i].classList.contains('live')) {
            ins.push({
                cell: i,
                class: 'live'
            })
        } else if (n > 3 || n < 2 && arr[i].classList.contains('live')) {
            ins.push({
                cell: i,
                class: 'dead'
            })
        }
    }
    ins.forEach(action => {
        arr[action.cell].classList = action.class;
    })
}

function init() {
    // Set game table visible and set col and row template
    $game.innerHTML = "";
    $game.style.display = 'grid';
    $game.style.gridTemplateColumns = `repeat(${side}, auto)`;
    $game.style.gridTemplateRows = `repeat(${side}, auto)`;
    // Place (side*side)/4 live cell in random places
    let liveArr = Array.from({ length: (side*side)/4 }, () => Math.floor(Math.random() * (side * side)));
    for (let i = 0; i < (side * side); i++) {
        let span = document.createElement("span");
        liveArr.forEach(n => (n === i) ? span.className = 'live' : null);
        $game.append(span);
    }
}

$btn.addEventListener('click', function() {
    side = document.querySelector('#side').value;
    init();
    document.querySelector('#side').style.display = 'none';
    $btn.style.display = 'none';
    (function loop() {
        setTimeout(function () {
        next();
        loop();
        }, 1000);
    }());
})