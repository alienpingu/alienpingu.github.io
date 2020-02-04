
// BOOTING
$( function() {
  $( "#accordion" ).accordion();
} );
AOS.init();


// BAR HIDER
window.onscroll = function() {
    $("nav")[0].classList.remove("d-none");
    $('.social-container')[0].classList.remove("d-none");
}

//
