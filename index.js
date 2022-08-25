const form = document.querySelector("form");
const ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = e.target.todo;
  if (todo.value == "") {
    const p = document.createElement("p");
    p.innerText = "Need some input";
    form.after(p);
  } else {
    const li = document.createElement("li");
    li.addEventListener("click", (e) => {
      toggleUnderline(e.target);
    });
    li.textContent = todo.value;
    ul.append(li);
    form.reset();
  }
});

function toggleUnderline(li) {
  li.style.textDecoration = "line-through";
}
