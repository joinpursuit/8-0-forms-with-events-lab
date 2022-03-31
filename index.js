console.log("Code your solution!");
const ul = document.querySelector("ul");
const newTodo = document.getElementById("new-todo");

newTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.todo.value) {
    let p = document.createElement("p");
    p.textContent = "Error todo item cannot be empty.";
    newTodo.append(p);
  } else {
    let li = document.createElement("li");
    li.textContent = event.target.todo.value;
    ul.append(li);
    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });
  }
});
