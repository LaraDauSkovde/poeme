sr.reveal('.s9-titre',{
	origin: 'left',
	distance: '100%',
	scale:0.9,
	opacity:0,
	duration:1000,
});

sr.reveal('.s9-description',{
    delay:500,
	origin: 'right',
	distance: '100%',
	scale:0.9,
	opacity:0,
	duration:1000,
});

sr.reveal('.s9-answer',{
    delay:1500,
	origin: 'bottom',
	distance: '200%',
	scale:0,
	opacity:1,
	duration:1000,
    interval:500
});
