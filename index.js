// Selectors

// Event Listeners
const parent = document.querySelector("form");
parent.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(userInput);

  const todoList = document.querySelector("ul");
  const list = document.createElement("li");
  list.textContent = event.target.userInput.value;
  todoList.append(list);
});
// event.target.userInput.value (what do you want the value of?)
// Functions

// console.log("Code your solution!");

// assistance of a classmate below
// const form = document.querySelector("form");
// form.addEventListener("Submit", (event) => {
//   event.preventDefault();
//   const paragraph = document.querySelector("p");
//   const ulList = document.querySelector("ul");
//   const list = document.createElement("li");
//   const item = event.target.userInput.value;
//   if (item.length === 0) {
//     paragraph.textContent = "Error.";
//   } else {
//     item.textContent === "";
//     list.textContent = item;
//     ulList.append(list);
//   }
//   event.target.reset();
// });

// const ulList = document.querySelector("ul");
// ulList.addEventListener("click", (event) => {
//   event.preventDefault();
//   event.target.style["text-decoration"] = "line-through";
// });
