// grabbing elements
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");

// once the event listens for a submit executes code below
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#items").value
  // error message
  if(!input) {
    p.innerText = "Error: text field can't be empty"
  } else {
    let li = document.createElement('li')
    li.innerText = input
    ul.appendChild(li)
    // making my p tag empty so it doesn't show up if the text field isn't empty
    p.innerText = ""
  }
});

// crosses out items when clicked on
ul.addEventListener('click', (e) => {
    e.target.style.textDecoration = "line-through"
})
