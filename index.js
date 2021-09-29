console.log;
document.querySelector("h1").textContent = "My To Do All List";

const body = document.querySelector("body");
const form = document.createElement("form");
const input = document.createElement("input");
const pg = document.createElement("p");

const button = document.createElement("button");

input.setAttribute("type", "text");
input.setAttribute("id", "input");

button.setAttribute("type", "submit");
button.textContent = "Submit";
button.style["margin-left"] = "10px";

body.append(document.createElement("hr"));
body.append(pg);

pg.style.display = "none";
pg.textContent = "Please Enter Text";

body.append(form);
form.append(input);
form.append(button);

body.append(document.createElement("ul"));

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (!input && !pg) {
    pg.style.display = "block";
  } else if (input.value.length > 0) {
    pg.style.display = "none";
    let li = document.createElement("li");
    li.textContent = input.value;
    document.querySelector("ul").appendChild(li);
  }
  form.reset();
});

document.querySelector("ul").addEventListener("click", (event) => {
  event.preventDefault();
  event.target.style["text-decoration"] = "line-through";
});

// Bonus code
