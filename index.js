// user clicks 'add item' after entering text
// obtain the user inputted text information
// create a new list item
// attach the user inputted text information to the new list item
// attach the list item to the unordered list

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = document.querySelector('input[type="text"]')
    const listItem = document.createElement('li')
    const list = document.querySelector('.todo')

    if (text.value.length === 0) { // If no text is inputted a paragraph error message will show up.
        const p = document.createElement('p')
        const body = document.querySelector('body')

        p.textContent = 'Please input text into the text box before submitting!'
        body.append(p)
    } else {
    listItem.textContent = text.value 
    list.append(listItem)
    }

    const listItems = document.querySelectorAll('li')
listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        item.setAttribute('style', 'text-decoration: line-through')
    })
})
})

