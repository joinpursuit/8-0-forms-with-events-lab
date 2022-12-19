const list = document.querySelector('ul')
const err = document.createElement('p')
err.innerText = 'Must not be empty'
err.style.color = 'red'
err.style.display = 'none'
document.querySelector('form').append(err)
document.addEventListener('submit', e => {
  e.preventDefault()
  let val = document.querySelector('input')
  if(val.value !== ''){
    (err.style.display = 'none')
    const listItem = document.createElement('li')
    listItem.innerText = val.value
    listItem.addEventListener('click', (e)=>{
        listItem.style.textDecoration = 'line-through'
    })
    list.append(listItem)
    val.value = ''
  }else
     (err.style.display = 'block')
 
})
