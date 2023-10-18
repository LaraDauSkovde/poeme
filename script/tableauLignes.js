function linesCreate() {
	var element = document.getElementById("s5-tableau-lignes");

	for (let i = 0; i < 40; i++) {
        const span = document.createElement('div');
        span.classList.add('s5-line');
        element.appendChild(span);
	}
	
}

linesCreate();