console.log("Code your solution!")
// let boxText = document.form.display.textContent
let boxText = document.querySelector("input")
let button = document.querySelector("button")
let allLI = document.querySelectorAll("li")



button.addEventListener('click', (event) => {
    event.preventDefault()
        let ul = document.querySelector("ul")
        ul.innerHTML += `<li onclick='strike(this)'>${boxText.value}</li>`
})

 function strike(e) {
     e.setAttribute("style", "text-decoration:line-through solid rgb(0, 0, 0)")
}




// button.addEventListener("submit", () => {
// })

// allLI.forEach((list)=>{
// list.addEventListener("click", (e) => {
//  e.preventDefault()
//  console.log(e)
// //  e.setAttribute("style", "text-decoration:line-through solid rgb(0, 0, 0)")
// })
// })