// console.log("Code your solution!")
const form= document.querySelector("form");
const ul= document.querySelector("ul");
let lis= document.querySelectorAll("li");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = event.target.todo.value;
    li.classList.add("list");
    ul.append(li);

    ul.addEventListener("click", event => {
        if(event.target.classList.contains("list")) {
            event.target.style.textDecoration = "line-through"
        }
    })
});
