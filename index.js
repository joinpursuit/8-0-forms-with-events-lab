console.log("Code your solution!")

// heading formating 
const heading = document.querySelector("h1")
const hr = document.createElement("hr")
const br = document.createElement("br")

heading.innerText = "My To-Dos"
heading.append(br)
heading.append(hr)

// form formating
const body = document.querySelector("body")
const form = document.createElement("form")
const input = document.createElement("input")
const button = document.createElement("button")
const ul = document.createElement("ul");
input.setAttribute("type", "text")
input.setAttribute("id", "todo")
input.setAttribute("placeholder", "type a todo")
button.setAttribute("type", "submit")
button.innerText = "Submit"

body.append(form)
body.append(ul)
form.append(input)
form.append(button)


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!input.value){
        const p = document.createElement("p")
        p.textContent = "Error: Todo cannot be applied."
        form.append(p)
    } else {
    const li = document.createElement("li");
    li.textContent = input.value
    ul.append(li)
    li.addEventListener("click", () => {
        li.style.textDecorationLine = "line-through"
    })
    }
    form.reset();
})