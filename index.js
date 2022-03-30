const todosList = document.querySelector("ul");

const submitForm = document.querySelector("form");

submitForm.addEventListener("submit", (event) => {
  let submittedTodo = event.target.todo.value;

  if (!submittedTodo) {
    let error = document.getElementById("error");
    error.textContent = "Error. Todo cannot be empty";
  } else {
    error.textContent = "";
    let todoListItem = document.createElement("li");
    todoListItem.textContent = submittedTodo;
    todosList.append(todoListItem);

    if (todoListItem) {
      let allListItems = document.querySelectorAll("li");
      for (let listItem of allListItems) {
        listItem.addEventListener("click", (event) => {
          listItem.setAttribute("style", "text-decoration: line-through;");
        });
      }
    }
  }
  event.preventDefault();
});
