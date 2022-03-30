const toDo = document.getElementById("toDo");
const toDoList = document.getElementById("toDoList");
const errorMessage = document.getElementById("errorMessage");
const addItem = document.getElementById("addItem");
addItem.style.height = "25px";
addItem.style.backgroundColor = "black";
addItem.style.color = "white";

toDo.addEventListener("submit", (e) => {
  e.preventDefault();

  let { inputItem } = e.target;
  const listItem = document.createElement("li");

  if (inputItem.value === "") {
    errorMessage.textContent = `ERROR: You're trying to submit an empty value!!!`;
    setTimeout(() => {
      errorMessage.textContent = "";
    }, 3000);
  } else {
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "DELETE";
    deleteItem.style.backgroundColor = "black";
    deleteItem.style.color = "red";
    deleteItem.style.marginLeft = "1%";

    listItem.textContent = inputItem.value;
    toDoList.append(listItem);
    listItem.append(deleteItem);
    inputItem.value = "";

    listItem.addEventListener("click", (e) => {
      e.preventDefault();

      listItem.style.textDecoration = "line-through";
    });

    deleteItem.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
});
