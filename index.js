const text = document.querySelector("input[type='text']");
const uList = document.querySelector("ul");
const form = document.querySelector("form");
let p = document.querySelector("p");

form.addEventListener("submit", (todo) => {
  todo.preventDefault();

  if (text.value === "") {
    p.textContent = "Error. Todo cannnot be empty";
  }

  let lists = document.createElement("li");
  lists.textContent = text.value;
  uList.append(lists);

  lists.addEventListener("click", () => {
    lists.style.textDecoration = "line-through";
  });
});
