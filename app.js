/* <-------------- Selectors ------------> */
const svgCheck = document.querySelector("svg #vector-check")
const svgOutline = document.querySelector("svg #vector-outline")
const form = document.querySelector("form");
const inputField = document.querySelector("input[type='text']")
const submitBTN = document.querySelector("button")
const todoList = document.querySelector(".todo-list")

/* <-------------- Event Listeners ------------> */
submitBTN.addEventListener("click", addNewToDo);
todoList.addEventListener("click", deleteTodoOrCross)

/* <-------------- Functions ------------> */
function addNewToDo(event){
    event.preventDefault()

    if(document.querySelector("p") !== null){
        document.querySelector("p").remove()
    }

    if(inputField.value == ""){
        let error = document.createElement("p")
        error.textContent = "Oh no! To-do's can't be empty"
        error.setAttribute("class", "error")
        form.after(error)
    }

    if(inputField.value != ""){
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "todo")

        let newLi = document.createElement("li")
        newLi.textContent = inputField.value
        inputField.value = ""
        newLi.setAttribute("class", "todo-item")

        let deletebtn = document.createElement("button")
        deletebtn.innerHTML= '<i class="fa-solid fa-trash"></i>'
        deletebtn.setAttribute("class", "delete-btn")

        

        newDiv.append(newLi, deletebtn)
        todoList.append(newDiv)
    }
}

function deleteTodoOrCross(event){
    const classList = event.target.classList;
    if (classList.contains('delete-btn')){
        event.target.parentNode.remove()
    }

    if(classList.contains('todo')){
        classList.toggle("completed")
    }

    addAnimation()

}

function addAnimation() {
    let status = true;

    for(let todo of todoList.children){
        if(!todo.classList.contains("completed")|| todo.classList == 0){
            status = false
        }

    }
    
    if(status == true){
        svgCheck.classList.toggle("animate");
        svgOutline.classList.toggle("animate");
        setTimeout(()=> {
            svgCheck.classList.toggle("animate")
            svgOutline.classList.toggle("animate")
        }, 2500)
    }
    
}
