console.log("Code your solution!");
console.log("Code your solution!");

const form = document.querySelector("#inputForm");
const toDoList = document.getElementById("todos");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let text = event.target.textInput.value;
  console.log(text);
  if (!text) {
    document.querySelector("#errorMessage").textContent =
      "Please enter a valid message";
  } else {
    document.querySelector("#errorMessage").textContent = "";
    text = text.split("\n");
    for (let word of text) {
      if (word === "") continue;
      const count = document.querySelectorAll(".todos").length;
      let newListItem = document.createElement("li");
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";

      newListItem.textContent = word;
      newListItem.setAttribute("class", "todos");
      newListItem.setAttribute("id", `todo${count}`);
      deleteButton.setAttribute("id", `${count}`);
      deleteButton.setAttribute("class", "erase");
      newListItem.append(deleteButton);

      toDoList.append(newListItem);
    }

    form.reset();
  }
});
toDoList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.className === "todos") {
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  } else if (event.target.className === "erase") {
    document.getElementById(`todo${event.target.id}`).remove();
  }
});
