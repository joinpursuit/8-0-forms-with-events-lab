// console.log("CODE YOUR SOLUTION")
const heading = document.querySelector("h1");
heading.innerHTML = "Todos";
const hr = document.createElement("hr");
document.body.appendChild(hr);
const body = document.querySelector("body");
const form = document.createElement("form");
const input = document.createElement("INPUT");
const paragraph = document.createElement("p");
const btn = document.createElement("button");
input.setAttribute("type", "text");
input.setAttribute("id", "todolist");
btn.setAttribute("type", "submit");
btn.textContent = "Submit";
document.body.append(paragraph);
paragraph.style.display="Type a todo";
paragraph.textContent = "Error! Todo cannot be empty";
document.body.append(form);
form.append(paragraph);
form.append(btn);
// const x = document.getElementById("myForm")

// form.setAttribute("id", "myForm");
// document.body.appendChild(form);
// const y = document.createElement("input");
// y.setAttribute("type", "text");
// y.setAttribute("value", "Type a todo");
// document.getElementById("myForm").appendChild(y);
// 
// input.setAttribute("type", "submit");
// document.body.appendChild(input);
// 
// input.setAttribute("type", "text");
// input.setAttribute("")
// const t = document.createTextNode("Submit");
// btn.appendChild(t);
// document.body.appendChild(btn);


