console.log("Code your solution!");
// Our app will have the following items:

// - An `h1` title (e.g. "My To-Dos").
const h1 = document.querySelector("h1");
h1.innerText = "My To-Dos";

// - A single `ul` tag, empty when the page is first loaded.
const ul = document.createElement("ul");
// - A `form` for the user to add a new to-do, with a single text `input` and a `submit` button.
const form = document.createElement("form");
const textBox = document.createElement("input");
textBox.setAttribute("type", "text");
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Submit";

const body = document.querySelector("body");
body.append(form);
form.append(textBox, button);
body.append(ul);
// And the following functionalities:

// - When the user writes something in the `form`'s text input area and clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. The page **should not refresh**.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.textContent += `${textBox.value}`;
  ul.append(li);

  li.addEventListener("click", (event) => {
    console.log(event.target);
    li.style.textDecoration = "line-through";
  });

  form.reset();
});
