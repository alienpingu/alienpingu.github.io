$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("MobileNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("MobileNav").style.width = "0%";
} 