const form = document.querySelector("form");
const ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = e.target.todo;

  if (input.value == "") {
    const p = document.createElement("p");
    p.innerText = "Need some input";
    form.after(p);
  } else {
    const inputTodos = input.value.trim().split("\n");
    for (let todo of inputTodos) {
      createTodoAndAppend(todo);
    }
    form.reset();
  }
});

function toggleUnderline(li) {
  li.style.textDecoration =
    li.style.textDecoration == "line-through" ? "none" : "line-through";
}

function deleteLi(li) {
  li.parentElement.remove();
}

function createTodoAndAppend(todoText) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  li.addEventListener("click", (e) => {
    toggleUnderline(e.target);
  });

  deleteBtn.addEventListener("click", (e) => {
    deleteLi(e.target);
  });
  deleteBtn.textContent = "Delete";

  span.textContent = todoText;
  li.append(span);
  li.append(deleteBtn);
  ul.append(li);
}
