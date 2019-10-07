$('#mobile-menu').on('click', () => {
  let $navUl = $('.nav-ul');
  let $mobile<a href="https://www.jqueryscript.net/menu/">Menu</a> = $('#mobile-menu');
  $('.nav-ul').addClass().slideToggle('slow');
});

$(window).bind("resize", () => {
  if( $(window).width() > 768) {
    $('.nav-ul').removeAttr("style");
  }
})
