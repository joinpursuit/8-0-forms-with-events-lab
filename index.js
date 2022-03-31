//console.log("Code your solution!");

const body = document.querySelector("body");
const form = document.querySelector("form");
const list = document.querySelector("ul");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let newItem = document.createElement("li");
	if (!event.target.value) {
		let errorMsg = document.createElement("p");
		errorMsg.textContent = "Error: nothing written!";
		form.append(errorMsg);
	}
	newItem.textContent = `${event.target.text.value}`;
	list.append(newItem);
	list.addEventListener("click", (event) => {
		event.target.style = "text-decoration: line-through";
	});
});
