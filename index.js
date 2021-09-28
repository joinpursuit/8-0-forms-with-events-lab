const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.todo.value) {
    document.querySelector("p").textContent = "";
    const newTodo = document.createElement("li");
    newTodo.textContent = event.target.todo.value;
    newTodo.addEventListener("click", () => {
      newTodo.style.textDecoration = "line-through";
    });
    // event.target.todo.value = "";
    form.reset();
    document.querySelector("ul").append(newTodo);
  } else {
    document.querySelector("p").textContent = "Error. Todo cannot be empty";
    form.reset();
  }
});
