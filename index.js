const ul = document.querySelector('ul')

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
event.preventDefault()
const li = document.createElement('li')
li.textContent = event.target.Todo.value
ul.append(li)

li.addEventListener('click', () => {
 li.style.textDecoration = "line-through"   
})
})
