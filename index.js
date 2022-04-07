const ul = document.querySelector("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const li = document.createElement("li");
  li.textContent = event.target.todo.value;

  ul.append(li);
  li.addEventListener("click", (e) => {
    li.style.textDecoration = "line-through";
  });
});
