window.onload = () => {

	// Show card body on card:hover
	$('.card').click((e) => e.currentTarget.children[1].classList.toggle('active'));
	// Scroll hz on .carousel:mousewheel
	let el = document.querySelector(".carousel");
	let x = 0, y = 0, top = 0, left = 0;

	let draggingFunction = (e) => {
	    document.addEventListener('mouseup', () => {
	        document.removeEventListener("mousemove", draggingFunction);
	    });

	    el.scrollLeft = left - e.pageX + x;
	    el.scrollTop = top - e.pageY + y;
	};

	el.addEventListener('mousedown', (e) => {
	    e.preventDefault();

	    y = e.pageY;
	    x = e.pageX;
	    top = el.scrollTop;
	    left = el.scrollLeft;

	    document.addEventListener('mousemove', draggingFunction);
	});
	// Activate nav bg on window scroll
	$(window).on('scroll', function(){
      $('nav').toggleClass('bg-primary');
      $(window).off();
  	});

	// Button for carousel active handlers
	$("#method .btn").on('click', (e) => {
		$("#method .btn").map((i,el) => {
			if (el.classList.contains("active")) {
				el.classList.remove("active");
			}
		})
		e.currentTarget.classList.add("active");
	});

	console.log("🛠 Event listener loaded");
}


let configCards = {
	past: [
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		}
	],
	actual: [
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		}
	],
	future: [
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		},
		{
			title: "Lorem Ipsum",
			price: "542",
			gain: "25",
			description: "Lorem Ipsum sit doloret",
			img:"https://via.placeholder.com/720x480?text=Golden"
			
		}
	]
}

// Create card in carousel

cardHandler = (config) => { 
	document.querySelector('.carousel').innerHTML = "";
	config.map((el, index) => { 
		let cardHtml = ` <img src="${el.img}"
			class="card-img-top" alt="placeholder"> <div class="card-body"> <h2
			class="card-title">${el.title}</h 2> <div class="card-icon"> <p><span
			class="iconify" data-icon="mdi:cash-multiple" data-inline="false"></span>
			${el.gain}% </p> <p><span class="iconify" data-icon="mdi:account-cash"
			data-inline="false"></span> ${el.price} €</p> </div> <p
			class="card-text">${el.description}</p> </div>`;

			let card = document.createElement("div"); 
			card.classList.add('card'); 
			card.innerHTML = cardHtml; 
			document.querySelector('.carousel').appendChild(card);


	})
	console.log("✒ Finito spawn di carte")
	
}

cardHandler(configCards.past);

console.log('✅ Script Loaded ');
