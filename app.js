//selectors
const inputField = document.querySelector("input[type='text']")
const submitBTN = document.querySelector("button")
const list = document.querySelector("ul")
const toDos = document.querySelectorAll("li")
const form = document.querySelector("form")

console.log(toDos)

//functions 
function addNewToDo(event){
    event.preventDefault()

    if(document.querySelector("p") !== null){
        document.querySelector("p").remove()
    }

    if(inputField.value == ""){
        let error = document.createElement("p")
        error.textContent = "Oh no! To-do's can't be empty"
        form.after(error)
    }

    if(inputField.value != ""){
        let newNew = document.createElement("li")
        newNew.textContent = inputField.value
        inputField.value = ""
        list.append(newNew)
    }
}

function cross(event){
    event.target.style.textDecoration = "underline"
}

//event listeners
submitBTN.addEventListener("click", addNewToDo);


