document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector('form')
    let ul = document.querySelector('#ul')
    let p = document.querySelector('p')

    form.addEventListener('submit', event => { 
        event.preventDefault()

        let input = document.querySelector('#input').value

        if(!input){
            p.innerText = "Error. Todo cannot be empty"
        } else {
            let li = document.createElement('li')
            li.innerText = input
            ul.appendChild(li)
        }
    })
    ul.addEventListener('click', event => {
        event.target.style.textDecoration = "line-through"
    })
})