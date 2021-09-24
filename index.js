document.querySelector("h1").textContent = "My To-Dos";
const body = document.querySelector("body");
const form = document.createElement("form");
const textInput = document.createElement("input");
const pEl = document.createElement("p");
const button = document.createElement("button");
textInput.setAttribute("type", "text");
textInput.setAttribute("id", "textInput");

button.setAttribute("type", "submit");
button.textContent = "Submit";
button.style["margin-left"] = "10px";

pEl.style.display = "none";
pEl.textContent = "Text Field Can't be Empty";

body.append(document.createElement("hr"));
body.append(pEl);
body.append(form);
form.append(textInput);
form.append(button);
body.append(document.createElement("ul"));

button.addEventListener("click", (event) => {
  event.preventDefault();
  //   conditional used to toggle hidden error paragraph element
  if (textInput.value.length === 0 && pEl.style.display === "none") {
    pEl.style.display = "block";
  } else if (textInput.value.length > 0) {
    pEl.style.display = "none";
    let li = document.createElement("li");
    li.textContent = textInput.value;
    document.querySelector("ul").appendChild(li);
  }
  form.reset();
});

document.querySelector("ul").addEventListener("click", (event) => {
  event.preventDefault();
  event.target.style["text-decoration"] = "line-through";
});
