const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  executeOnSubmit(event);
});

function executeOnSubmit(event) {
  // prevent default action
  event.preventDefault();

  // extract user_input
  const userInput = event.target.text_input.value;

  // respond depending on user_input
  displayResponse(userInput);

  // clear contents of form
  event.target.text_input.value = "";
}

function displayResponse(input) {
  if (!input) {
    return (document.querySelector("p").textContent = "Please provide a valid To-Do.");
  }

  document.querySelector("p").textContent = "";

  const deleteBtn = createDeleteButton();
  const toDo = createToDoListElement(input);

  toDo.append(deleteBtn);

  const unOrderedListElement = document.querySelector("ul");
  unOrderedListElement.append(toDo);
}

function createDeleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delBtn");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (clickEvent) => {
    clickEvent.target.parentNode.remove();
  });

  return deleteBtn;
}

function createToDoListElement(input) {
  const listElement = document.createElement("li");
  listElement.classList.add("toDos");
  listElement.textContent = `${input}`;

  listElement.addEventListener("click", (clickEvent) => {
    clickEvent.target.classList.toggle("line-through");
  });

  return listElement;
}
