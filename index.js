console.log("Code your solution!")

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#items").value
  
  if(!input) {
    p.innerText = "Error: text field can't be empty"
  } else {
    let li = document.createElement('li')
    li.innerText = input
    ul.appendChild(li)
    
    p.innerText = ""
  }
});


ul.addEventListener('click', (e) => {
    e.target.style.textDecoration = "line-through"
})