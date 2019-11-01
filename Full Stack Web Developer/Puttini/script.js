
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("MobileNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("MobileNav").style.width = "0%";
} 

// Collapsible Gallery
var g = document.getElementById('Gallery');

function dSwitch() {
	if (g.classList.contains('d-none') == true) {
		g.classList.remove('d-none');
	}
	else {
		g.classList.add('d-none');
	}
}


