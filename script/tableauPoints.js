function tableCreate() {
	var element = document.getElementById("tableau-points");

	const tbl = document.createElement('table');

	for (let i = 0; i < 20; i++) {
		const tr = tbl.insertRow();
		for (let j = 0; j < 24; j++) {
			const td = tr.insertCell();
			const span = document.createElement('span');
			span.classList.add('circle');
			td.appendChild(span);
		}
	}
	element.appendChild(tbl);
}

tableCreate();