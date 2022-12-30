//console.log("Code your solution!")

const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = document.createElement("li")
    li.textContent = input.value
    document.querySelector("ul").append(li);

    const list= document.querySelectorAll("ul li")

    list.forEach((li) => {
        li.addEventListener("click", () => {
            li.setAttribute("style", "text-decoration: line-through");
        })
    })
})
