const input = document.querySelector("input");
const form = document.querySelector("form");
const button = document.querySelector("button");

console.log("hello");
form.addEventListener("submit", (event) => {
  console.log("sup");
  event.preventDefault();
  const li = document.createElement("li");
  li.textContent = input.value;
  document.querySelector("ul").append(li);

  const list = document.querySelectorAll("ul li");

  list.forEach((li) => {
    li.addEventListener("click", () => {
      li.setAttribute("style", "text-decoration: line-through");
    });
  });
});
