const form = document.getElementById("to-do-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputItem = event.target.addToDo.value;
  const unorderedList = document.querySelector("ul");
  const listItem = document.createElement("li");

  listItem.textContent = inputItem;
  unorderedList.append(listItem);

  listItem.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});
