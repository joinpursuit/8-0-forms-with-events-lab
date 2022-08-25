// console.log("Code your solution!")

document.body.style.textAlign = `center`
document.body.style.backgroundImage = `url('to-do-list-190702-800x450-e1597247898638.jpeg')`
document.body.style.backgroundRepeat = `no-repeat`
document.body.style.backgroundPosition =`center`
document.body.style.backgroundColor = `rgb(32,42,68)`
document.body.style.color = `white`



const h1 = document.querySelector(`h1`)
h1.textContent = `Destiny's To-Do List`
h1.style.fontFamily = `chalkboard`
// h1.style.color = `white`
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

    // set variable to represent inputted text in form
    const typed = e.target.input.value
    // console.log(typed)
    
    // create variable for li element
    const listItem = document.createElement(`li`)

    // create variable for delete button
    const deleteButton = document.createElement(`button`)
    deleteButton.setAttribute(`type`, `button`)
    deleteButton.setAttribute(`style`, `width:auto; height:auto`)
    deleteButton.textContent = `Delete item`
    
    if (typed){
        //add contents of inputted textbox to list on page then append to ul
        listItem.textContent = typed
        listItem.setAttribute(`class`, `${typed}`)
        deleteButton.setAttribute(`class`, `${typed}`)
        listItem.append(deleteButton)
        ul.append(listItem)
        
        // if a previous error was shown (p), this removes it once a valid entry is submitted
        if(document.querySelectorAll(`p`).length){
            document.querySelectorAll(`p`).forEach(x =>
                x.remove())
        }
    }
    else{
        // create error if no text content exist in inputted box
        // alert(`Please enter text into field.`)
        const error = document.createElement(`p`)
        error.textContent =`If you had nothing to do, you wouldn't be here. Please enter text into field`
        error.style.color =`red`
        error.style.fontSize = `18px`
        formDiv.after(error)
         }
    
         form.reset()
  
         //  add event listener to `li` -> list items to have line through if clicked     
    listItem.addEventListener(`click`, e => {
        if(e.target.style.textDecoration === `line-through`){
            e.target.style.textDecoration =`none`
        }
        else{
            e.target.style.textDecoration =`line-through`
        }
        

        
    })

        // Add event listener to delete buttons to delete corresponding list item when clicked
    deleteButton.addEventListener(`click`, e => {
        const className = e.target.className
        const remove = document.getElementsByClassName(`${className}`)
        // console.log(remove) -> HTML collection not NodeList can't loop
        remove[0].remove()
       })
})


