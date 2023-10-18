sr.reveal('.s10-partie-droite',{
	origin: 'top',
	distance: '100%',
	scale:0,
	opacity:0,
	duration:2000,
	interval: 500,
});

sr.reveal('.s10-description-p',{
	origin: 'bottom',
	distance: '50px',
	scale:0,
	opacity:0,
	delay:1500,
	duration:1000,
	interval: 500,
});

sr.reveal('.s10-titre',{
	delay: 1000,
	origin: 'left',
	distance: '100%',
	scale:0.9,
	opacity:0,
	duration:1000,
});

const opacity = (delay, id) => {
	let el = document.getElementById(id)
	let animate = el.animate([
		{opacity : 0},
		{opacity : 1},
	],{
		delay: delay,
		duration: 500,
  		iterations: 1,
	})

	animate.addEventListener('finish', () =>{
		el.style.opacity = "1"
	})
}