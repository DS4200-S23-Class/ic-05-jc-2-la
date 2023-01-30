
let currCount = 0;
function buttonClicked() {
	console.log("button was clicked");

	// select the element we want to modify
	let count = document.getElementById("count");

	let buttonDiv = document.getElementById("button-div");

	currCount = currCount + 1;

	count.innerHTML = currCount;
}


