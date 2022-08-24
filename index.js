// console.log("Code your solution!")



const h1 = document.querySelector("h1")
h1.textContent = "My To-Dos"

const ul = document.createElement("ul")
const body = document.querySelector("body")

const form = document.createElement("form")
body.append(form)

const textarea = document.createElement("textarea")
form.prepend(textarea)

textarea.setAttribute("type", "notes")
textarea.setAttribute("id", "notes")
textarea.setAttribute("required", "")

const button = document.createElement("button")
button.textContent = "Submit"
button.setAttribute("id", "submit")
button.setAttribute("value", "submit")
button.setAttribute("type", "submit")
button.setAttribute("name", "submit")
form.append(button)

form.append(ul)


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const notes = event.target.notes.value
    generateList(notes)

    const list = document.querySelectorAll("li")
    console.log(list)
    
    list.forEach((lists) => {
        lists.addEventListener("click", () => {
            // lists.style.textDecoration = "line-through"
            lists.classList.toggle("click")
    
        })
    })

    form.reset()
})



function addList(notes) {
    const li = document.createElement("li");
    li.textContent
    
    if (notes) {
      li.append(document.createElement("br"), notes);
    }
    return li;
  }
  
  function generateList(notes) {
    const li = addList(notes);
   const ul = document.querySelector("ul");
    ul.append(li);
  }
  
//   const notes = document.querySelector("notes")
// notes.addEventListener("input", () => {
//     if(notes.validity.valuteMissing){
//         notes.setCustomValidity("Error. Todo cannot be empty");
//         notes.reportValidity();
//     }
// })

