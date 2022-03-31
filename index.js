const form = document.getElementById("To-Do List");
let list = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   if (!event.target.value) {
  //     throw "Missing fields.";
  //   }

  let newList = document.createElement("li");
  newList.textContent = event.target.text.value;
  list.append(newList);
  list.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});
