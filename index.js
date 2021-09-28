const toDoForm = document.querySelector("form");
const enterToDo = document.getElementById("enter-to-do");
const ul = document.querySelector("ul");
const clearInput = "";

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");

  if (enterToDo.value) {
    li.textContent = enterToDo.value;
    ul.append(li);
    enterToDo.value = clearInput;
  } else {
    const p = document.createElement("p");
    p.textContent = "Error. Todo cannot be empty!";
    toDoForm.append(p);
  }

  li.addEventListener("click", (event) => {
    li.style.textDecoration = "line-through";
    window.alert("You have crossed out this to-do: " + li.textContent);
  });
});
