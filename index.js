const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.todo.value) {
    document.querySelector("p").textContent = "";
    const newTodo = document.createElement("li");
    newTodo.textContent = event.target.todo.value;
    newTodo.addEventListener("click", () => {
      if (newTodo.style.textDecoration !== "line-through") {
        newTodo.style.textDecoration = "line-through";
      } else {
        newTodo.style.textDecoration = "none";
      }
    });
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", (eventDel) => {
      newTodo.parentNode.removeChild(newTodo);
    });
    deleteButton.style.marginLeft = "10px";
    deleteButton.textContent = "Delete";
    newTodo.append(deleteButton);
    document.querySelector("ul").append(newTodo);
  } else {
    document.querySelector("p").textContent = "Error.Todo cannot be empty";
  }
  form.reset();
});
