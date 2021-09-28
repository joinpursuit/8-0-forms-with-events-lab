// Character limit countdown
const input = document.querySelector("#to-do");
const count = document.querySelector("#count");
const characterLimit = input.maxLength;
count.textContent = characterLimit;

input.addEventListener("keydown", (event) => {
  const length = input.value.length;
  count.textContent = characterLimit - length;
  event.target.reset();
});

//Add to the list
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  count.textContent = characterLimit;

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = input.value;

  ul.append(li);
  event.target.reset();
});

//display error message
