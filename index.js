// const addToDoButton = document.getElementById("submitButton");
const selectForm = document.querySelector("form");
const toDoCon = document.getElementById("container");

selectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const listItem = document.createElement("li");
  const inputField = event.target.userInput.value;
  listItem.textContent = inputField;
  toDoCon.append(listItem);
});

// todos.forEach((todo) => {
//     todo.addEventListener("click", (event) => {
//       todo.style.textDecoration = "line-through solid";
//     });

toDoCon.addEventListener("click", (event) => {
  event.preventDefault();
  const lists = document.querySelectorAll("li");
  lists.forEach((list) => {
    event.target.style.textDecoration = "line-through solid";
  });
});
