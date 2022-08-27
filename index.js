console.log("Code your solution!");

// Create an event listener for submit button
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = event.target.todo.value;
  if (todo) {
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    const ul = document.querySelector("ul");
    ul.append(newLi);

    // Add event listener on newLi
    newLi.addEventListener("click", (newLiClickEvent) => {
      newLiClickEvent.target.style.textDecoration = "line-through";
    });
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Error! Todo cannot be empty";
    event.target.after(errorMessage);
  }
});
