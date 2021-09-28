

document.querySelector("h1").textContent = "To Do List";
//This is just the name

const body = document.querySelector("body");
const form = document.createElement("form");
const input = document.createElement("input");
const pg = document.createElement("p");
// You can name this anything you want. I chose pg because this is what I consider the page theres no real need. 
const button = document.createElement("button")


//These will set the event listeners the reason I put them above the other code is because when I tried to align them in matching order the test would break. 

input.setAttribute("type", "text");
input.setAttribute("id", "input");
//Attributes might not be needed but I just add them because its what I remember doing. You can attempt to erase them but I think it's best practice. 
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
  //   This conditional is used to toggle the error I only used bangs because I think their cute. 
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



