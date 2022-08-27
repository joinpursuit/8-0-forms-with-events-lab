console.log("Code your solution!");

// Create an event listener for submit button
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newLi = document.createElement("li");
  const todo = event.target.todo.value;
  if (todo) {
    newLi.innerText = todo;
    const ul = document.querySelector("ul");
    ul.append(newLi);
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Error! Todo cannot be empty";
    event.target.after(errorMessage);
  }
});
