
// Nascondi la Navbar quando scorri in basso

navScrollHandle = () => {
  var prevScrollpos = window.pageYOffset;

  window.onscroll = () => {

    var currentScrollPos = window.pageYOffset;

    (prevScrollpos > currentScrollPos) ? $('nav')[0].style.top = "0" : $('nav')[0].style.top = "-50px"

    prevScrollpos = currentScrollPos;

  } 
}

// Scorri la visuale verso l' elemento parametro
scrollToEl = (e) => e.scrollIntoView({behavior: "smooth", block: "start"})


// Quando la freccia bounce viene cliccata sposta la visuale sulla sezione info
$('.arrow.bounce, .nav-link.info').click(() => scrollToEl($('#info')[0]))


navScrollHandle();

