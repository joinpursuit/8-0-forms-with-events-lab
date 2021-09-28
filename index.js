const toDoForm = document.querySelector("form");
const enterToDo = document.getElementById("enter-to-do");
const ul = document.querySelector("ul");
const clearInput = "";

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");

  if (enterToDo.value) {
    li.textContent = enterToDo.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("id", "deleteBut")

    ul.append(li);
    li.append(deleteBtn);
    enterToDo.value = clearInput;

    deleteBtn.addEventListener("click", () => {
      li.remove();
      window.alert("You have removed this to-do: " + li.textContent);
    });

    li.addEventListener("click", (event) => {
      li.style.textDecoration = "line-through";
    });
  } else {
    const p = document.createElement("p");
    p.textContent = "Error. Todo cannot be empty!";
    toDoForm.append(p);
  }
});
