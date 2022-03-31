// When the user writes something in the form's text input area and clicks submit, the ul should update with a new li item at the bottom of the list. The page should not refresh.

const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let { todo } = event.target;
  let todos = todo.value.split("\n");

  todos.forEach((todo) => {
    //When the user writes nothing in the form's text input area and clicks submit, an error message (inside a p tag) should appear below the form.
    if (todo === "") {
      document.querySelector("#errorMessage").textContent =
        "Error! todo can't be empty";
    } else {
      document.querySelector("#errorMessage").textContent = "";
      let li = document.createElement("li");
      // When the user clicks on one of the li items, the item should be crossed out, indicating that that to-do is complete.
      // Clicking a todo that is crossed out (completed) uncrosses the todo.
      let unCrossed = true;
      li.addEventListener("click", (event) => {
        if (unCrossed) {
          event.target.style.textDecoration = "line-through";
          unCrossed = false;
        } else {
          event.target.style.textDecoration = "none";
          unCrossed = true;
        }
      });
      li.textContent = todo;
      // Implement a delete button next to each li that removes that li tag entirely.
      let removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", (event) => {
        li.remove();
        event.target.remove();
      });
      ul.append(li);
      li.append(removeButton);
    }
  });
  // Have the input go back to empty after adding a new todo.
  todo.value = "";
});
