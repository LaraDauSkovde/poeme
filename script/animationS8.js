sr.reveal('.s8-haut',{
	rotate:{x:5,y:90,z:0},
	origin:"top",
	duration:2000,
	distance:'100%',
});

sr.reveal('.s8-description-p',{
	origin: 'bottom',
	distance: '50px',
	scale:0.9,
	opacity:0,
	duration:1000,
	delay:2000,
	interval: 500,
});

sr.reveal('.s8-titre',{
	delay: 1000,
	origin: 'left',
	distance: '100%',
	scale:0.9,
	opacity:0,
	duration:1000,
});

sr.reveal('.s8-bas',{

	scale:0,
	opacity:0,
	duration:2000,
	delay:4000,
});