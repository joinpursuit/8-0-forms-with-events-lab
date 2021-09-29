const ul = document.querySelector("ul");
const form = document.querySelector("form");
Paragraph = document.querySelector("p");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ToDos = event.target.ToDo.value;
  if (!ToDos) {
    Paragraph.textContent = "Error, must type text in the text input field";
  } else {
    Paragraph.textContent = "";
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent = "Delete";
    const li = document.createElement("li");
    li.style.textDecoration = "line-through none solid rgb(0, 0, 0)";
    li.append(deleteButton, ToDos);
    ul.append(li);
    li.addEventListener("click", (event) => {
      event.target.classList.toggle("lineThrough");
    });
    deleteButton.addEventListener("click", (event) => {
      li.parentNode.removeChild(li);
      event.target.parentNode.removeChild(event.target);
    });
    form.reset();
  }
});