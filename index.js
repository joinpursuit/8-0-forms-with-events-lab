console.log("Code your solution!")

let form = document.getElementById("to-do");
let list = document.querySelector("ul");
//let input = document.getElementById("text");
form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent reload on submit
  if (!event.target.value) {
    let error = document.createElement("p");
    error.textContent = "Error";
    console.log(error);
  }
  let newItem = document.createElement("li");
  newItem.textContent = event.target.text.value;
  list.append(newItem);
  list.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});

