const sr = ScrollReveal({
	reset:true,
});

sr.reveal('.s1-offre',{
	delay:500,
	origin:"left",
	duration:2000,
	distance:'100%',
});

sr.reveal('.s1-description-p',{
	origin: 'bottom',
	distance: '50px',
	scale:0.9,
	opacity:0,
	duration:1000,
	delay:1000,
	interval: 500,
});

sr.reveal('.s1-titre',{
	origin: 'left',
	distance: '50px',
	scale:0.9,
	opacity:0,
	duration:1000,
	delay:500,
});

sr.reveal('.s1-partie-droite img',{
	rotate:{x:-45,y:90,z:0},
	origin: 'right',
	distance: '100%',
	scale:0.5,
	opacity:0,
	duration:1000,
});