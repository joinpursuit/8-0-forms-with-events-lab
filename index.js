// console.log("Code your solution!")

const ul = document.querySelector('ul')

const form = document.querySelector('form')


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const li = document.createElement("li")
    li.textContent = event.target.chores.value
    ul.append(li)
    // form.reset();
    
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through'

    })
})
