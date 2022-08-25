console.log("Code your solution!")
const form = document.getElementById("new-todo")

const ul = document.querySelector("ul")
const p = document.querySelector("p")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    if (!event.target.text.value) {
        p.textContent = "Error";
        return p;
      }
    console.log(event.target.value)
        let li = document.createElement("li")
        li.textContent = event.target.text.value;
        ul.append(li)
    li.addEventListener("click", (event) =>{
        event.preventDefault()
        event.target.style.textDecoration = "line-through"
    })
})

