// Quando la freccia bounce viene cliccata sposta la visuale sulla sezione info
$('.arrow.bounce').click(() => $('#info')[0].scrollIntoView({behavior: "smooth", block: "start"}))


// Nascondi la Navbar quando scorri in basso
var prevScrollpos = window.pageYOffset;

window.onscroll = () => {

  var currentScrollPos = window.pageYOffset;

  (prevScrollpos > currentScrollPos) ? $('nav')[0].style.top = "0" : $('nav')[0].style.top = "-50px"

  prevScrollpos = currentScrollPos;

} 