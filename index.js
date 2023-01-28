console.log("Code your solution!")
let ul = document.querySelector("ul")
document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log("hello")
    let input = document.getElementById("inputText")
    let li = document.createElement("li")
    li.textContent = input.value
    input.value = ""
    ul.append(li)

    li.addEventListener('click', () => {
        li.style.textDecoration = "line-through"
    })
})