// When the user writes something in the form's text input area and clicks submit, the ul should update with a new li item at the bottom of the list. The page should not refresh.

const form = document.querySelector("form");
const ul = document.querySelector("ul");

console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let { todo } = event.target;
  //When the user writes nothing in the form's text input area and clicks submit, an error message (inside a p tag) should appear below the form.
  if (todo.value === "") {
    document.querySelector("#errorMessage").textContent =
      "Error! todo can't be empty";
  } else {
    document.querySelector("#errorMessage").textContent = "";
    let li = document.createElement("li");
    // When the user clicks on one of the li items, the item should be crossed out, indicating that that to-do is complete.
    li.addEventListener("click", (event) => {
      event.target.style.textDecoration = "line-through";
    });
    li.textContent = todo.value;
    ul.append(li);
  }
});
