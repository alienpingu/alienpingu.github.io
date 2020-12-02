let navBar = $('nav.navbar')
let screenW = screen.width

$('#heroBtn0').on('click', () => window.open("tel:390221119572"))
$('#heroBtn1').on('click', () => $('#footer')[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})) 

// Navbar script
// Hide navbar when scroll down
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    (prevScrollpos > currentScrollPos) ? navBar.css('top', '0') : navBar.css('top', '-70px') 
    prevScrollpos = currentScrollPos;
} 

// responsiveHandler()

console.info('Script loaded ;)')