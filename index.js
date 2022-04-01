const toDo = document.getElementById("toDo");
const toDoList = document.getElementById("toDoList");
const errorMessage = document.getElementById("errorMessage");
const addItem = document.getElementById("addItem");

toDo.addEventListener("submit", (e) => {
  e.preventDefault();

  let { inputItem } = e.target;

  if (inputItem.value === "") {
    errorMessage.textContent = `ERROR: You're trying to submit an empty value!!!`;
    setTimeout(() => {
      errorMessage.textContent = "";
    }, 3000);
  } else {
    const tasks = inputItem.value.split("\n");
    for (const task of tasks) {
      addToList(task);
    }
    toDo.reset();
  }

  function addToList(addTask) {
    const listItem = document.createElement("li");
    const deleteItem = document.createElement("button");
    deleteItem.classList.add("deleteItem");
    deleteItem.textContent = "DELETE";

    listItem.textContent = addTask;
    toDoList.append(listItem);
    listItem.append(deleteItem);

    listItem.addEventListener("click", (e) => {
      e.preventDefault();

      listItem.classList.toggle("strike");
    });

    deleteItem.addEventListener("click", (e) => {
      e.preventDefault();

      listItem.remove();
    });
  }
});
