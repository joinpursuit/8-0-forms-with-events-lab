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
    document.querySelector("ul").append(newTodo);
  } else {
    document.querySelector("p").textContent = "Error. Todo cannot be empty";
  }
  // event.target.todo.value = "";
  form.reset();
});
