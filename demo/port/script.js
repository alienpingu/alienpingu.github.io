window.onload = function() {
    setTimeout(function() { showSession("session-1"); }, 300);
    setTimeout(function() { showSession("session-2"); }, 400);
    setTimeout(function() { showSession("session-3"); }, 450);
    setTimeout(function() { showSession("session-4"); }, 870);
    setTimeout(function() { showSession("session-5"); }, 1500);
    setTimeout(function() { document.querySelector('#start_screen').style.display = 'none' }, 2000);
};
function showSession(id) {
    const session = document.getElementById(id);
    session.style.display = "block";
}
