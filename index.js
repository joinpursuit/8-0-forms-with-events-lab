const form = document.querySelector('form')
const text = document.querySelector("input[type='text']")
let ul = document.querySelector('ul')
let p = document.querySelector('p')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (text.value === '') {
    p.textContent = 'Error. Todo cannnot be empty'
  }

  let li = document.createElement('li')

  li.textContent = text.value

  ul.append(li)

  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through'
  })
})
