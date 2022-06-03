let elementToHide = document.getElementsByClassName('toHide');
// window.localStorage.setItem("show_ec_logs","true");  

hideElements = () => {
    for (let i = 0; i < elementToHide.length; i++) {
        const element = elementToHide[i];
        element.style.display = 'none';
    }
}
showElements = () => {
    for (let i = 0; i < elementToHide.length; i++) {
        const element = elementToHide[i];
        element.style.display = 'block';
    }
}
window.addEventListener('hashchange',() => {
    (location.hash !== '' && location.hash !== 'scroll') ?  hideElements() : showElements()
});