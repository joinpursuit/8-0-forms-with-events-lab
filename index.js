console.log("Code your solution!")

document.body.style.textAlign = `center`


const h1 = document.querySelector(`h1`)
h1.textContent = `My To-Do's`
const ul = document.createElement(`ul`)
h1.after(ul)

// Structure tags for Form area
const formDiv = document.createElement(`div`)
ul.after(formDiv)
const form = document.createElement(`form`)
formDiv.append(form)
const inputBox = document.createElement(`input`)
form.append(inputBox)
const label = document.createElement(`label`)
form.prepend(label)
const clickButton = document.createElement(`button`)
form.append(clickButton)
const buttonArea = document.createElement(`section`)
form.append(buttonArea)
buttonArea.append(clickButton)
buttonArea.prepend(document.createElement(`br`))

//styling
ul.style.listStyle = `none`
clickButton.setAttribute(`style`, `width:120px;height:20px`)
clickButton.setAttribute(`type`, `submit`)
clickButton.textContent = `Add to List`



//Assigning attributes to tags in form area
label.setAttribute(`for`, `chores`)
label.textContent = `What I Need to do: `

inputBox.setAttribute(`type`, `text`)
inputBox.setAttribute(`name`, `input`)
inputBox.setAttribute(`id`, `chores`)



// add event listener to form and update ul with li elements that have textcontent if inputed value

form.addEventListener(`submit`, e => {
    e.preventDefault()
    const typed = e.target.input.value
    // console.log(typed)
    const listItem = document.createElement(`li`)
    if (typed){
        listItem.textContent = typed
        ul.append(listItem)
    }
    form.reset()
})



