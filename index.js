document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let li = document.createElement("li");
  li.textContent = `${document.querySelector("input[type=text]").value}`;
  li.addEventListener("click", (event) => {
    event.preventDefault();
    li.style.textDecoration = "line-through";
    console.log("this worked.");
  });
  document.querySelector("ul").append(li);
});
