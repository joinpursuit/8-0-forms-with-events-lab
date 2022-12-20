
const ul = document.querySelector("ul")


const addToDO = ((text) => {
    if (text) {
        const li = document.createElement("li")
        
        li.addEventListener("click" ,(event)=> {
            li.style.textDecoration = "line-through"
         
            // event.target.form.li.todo = textdecorationline;
            console.log(event.target)
            console.log(text)
        }) 
        ul.append(li);
        li.append(text)
        
        }
}) 

const pTag = document.querySelector("p.paragraph")
const form = document.querySelector("form")
const li = document.querySelector("li")

const submit = document.querySelector("button")

// ** A more condensed one liner way to write the .addEventListener 
// Instead of splitting the doucmnet.querySelector("button") line from the form.addEventlistener line of code.**
//  document.querySelector("button").form.addEventListener("submit", (event)=> {
//     event.preventDefault()
//  const thisInput =  document.querySelector("input") - ** Create a variable to store the value of our HTML input element**
//const text = thisInput.value - ** A variable to store the string values of this input that is typed into the input box.


form.addEventListener("submit", (event) => {
    event.preventDefault()

  const thisInput =  document.querySelector("input")
  const text = thisInput.value
//   console.log(text)
//   console.log(thisInput.value)
if (form.todo.value === "") {
    pTag.innerText = "Error No Input"
}
// }
    addToDO(text)
    form.reset()
})


