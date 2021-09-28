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
    const li = document.createElement("li");
    
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', "submit");
    deleteButton.textContent = 'Delete';
    li.append(deleteButton);
    li.textContent = ToDos;
    li.style.textDecoration = "line-through none solid rgb(0, 0, 0)";
    ul.append(li);

    li.addEventListener("click", (event) => {
      event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)";
    });
    form.reset();
  }
});