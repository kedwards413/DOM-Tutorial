window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	var mySelect = document.querySelector("#mySelect");
	for (let country of countries) {
		mySelect.innerHTML += `<option value=''> ${country} </option>`;
	}
};
