window.onload = function() {
    setTimeout(function() { showSession("session-1"); }, 300);
    setTimeout(function() { showSession("session-2"); }, 400);
    setTimeout(function() { showSession("session-3"); }, 450);
    setTimeout(function() { showSession("session-4"); }, 870);
    setTimeout(function() { showSession("session-5"); }, 1500);
    setTimeout(function() { document.querySelector('#start_screen').style.display = 'none' }, 2250);
};
function showSession(id) {
    const session = document.getElementById(id);
    session.style.display = "block";
}

// Panel
let panelContainer = document.querySelector('.panel-container');
let infoBtn = document.querySelector('#info-btn')
infoBtn.addEventListener('click', () => {
    panelContainer.style.display = 'flex';
    panelContainer.addEventListener('click', () => panelContainer.style.display = 'none')
})
