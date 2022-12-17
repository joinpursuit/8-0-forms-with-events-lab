
const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const myList = document.createElement("li")
    myList.textContent = input.value
    document.querySelector("ul").append(myList);

    const toDo = document.querySelectorAll("ul li")

    toDo.forEach((li) => {
        myList.addEventListener("click", () => {
         myList.style.textDecoration = "line-through solid";

        })
    })

    form.reset();
})



