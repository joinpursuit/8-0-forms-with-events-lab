console.log("My To-Do!")

const toDoForm = document.querySelector("form")
// ^---grabs the form from the DOM

// const blankErrUl = document.querySelector("ul")

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // ^--- stops the form from automatically resetting itself

    const newLi = document.createElement("li")
    //^--- create an li element

    const textInputGrab = document.querySelector("#text-input").value
    // ^--- grabs the value of the users text input


    newLi.textContent = textInputGrab
    //^--- sets the li to the users text input

    newLi.addEventListener("click", (event) => {
        event.preventDefault()
        newLi.style.textDecoration = "line-through"
        // ^-- sets the finished task to be crossed out off the to do list with a line-through command



    })
    // v--- all this must be in the toDoForm functtion for it to work

    const blankErrUl = document.querySelector("ul")
    // ^--- empty paragragh under form, the ul is grabbed

    blankErrUl.append(newLi)
    // ^--- thats the modified li to the ul 
})

// Code Attempts--v
// const clickSubmit = document.querySelector("submit")
// const textArea = document.querySelector("#textInput").value
// const textInput = event.target.textInput.value
    // ^--this will contribute to calling a function to help collect data to make radio button
    // const listForLi = documents.querySelector("li")
    // newLi.append(listForLi)
    // if (textInput) {
//     newLi.textContent = `${text-input.value}`
//     blankErrUl.append()
// }