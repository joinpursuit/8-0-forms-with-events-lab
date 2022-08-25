


// console.log("Code your solution!")
const form = document.getElementById("todos")
const ul = document.querySelector('ul')
const button = document.querySelector('button')
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    if(!event.target.todo.value){
        const errorMsg = document.createElement('p')
        errorMsg.textContent = "This textbox cannot be left empty" 
        button.after(errorMsg)
    }

    const li = document.createElement("li")
    const deleteIt = document.createElement("button")
   // li.textContent = input
    console.log(event)
    li.textContent = event.target.todo.value
    ul.append(li)
    li.append(deleteIt)
    deleteIt.setAttribute("id", `${event.target.todo.value}`)
    li.setAttribute("id", `${event.target.todo.value}`)
    
    //deleteIt.setAttribute
    deleteIt.addEventListener('click', (event => {
    const itemsBeGone = document.getElementById(`${deleteIt.id}`)
    itemsBeGone.remove()
    }))
    li.addEventListener('click', (event) =>{li.style.textDecoration = 'line-through'

          })
    
    form.reset()

})