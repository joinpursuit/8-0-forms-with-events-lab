const todosList = document.querySelector("ul");

const submitForm = document.querySelector("form");

submitForm.addEventListener("submit", (event) => {
  let submittedTodo = event.target.todo.value;
  event.preventDefault();

  if (!submittedTodo) {
    let error = document.getElementById("error");
    error.textContent = "Error. Todo cannot be empty";
  } // Validates user input and gives error if input field is empty when submitting
  else {
    error.textContent = "";

    let todoListItem = document.createElement("li");
    todoListItem.textContent = submittedTodo;
    todosList.append(todoListItem);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    todoListItem.append(deleteButton);
    // Creates a list item with a delete buttonfor the inputted strings and displays them

    let inputField = document.querySelector("input");
    if (todoListItem) {
      inputField.value = "";
      inputField.placeholder = "";
    }
    // Makes input field go back to empty when a todo is submitted

    deleteButton.addEventListener("click", (event) => {
      todoListItem.remove();
    });
    // Adds eventListener to delete button that deletes list item when clicked

    if (todoListItem) {
      let allListItems = document.querySelectorAll("li");
      for (let listItem of allListItems) {
        listItem.addEventListener("click", (event) => {
          listItem.setAttribute("style", "text-decoration: line-through;");
        });
      }
    }
    // Crosses out todo items that are clicked on
  }
});
