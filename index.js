console.log("Code your solution!")

const formz = document.querySelector('form')

//console.log(formz)


const list = document.querySelector('ul')
formz.addEventListener('submit', (e) => {
    e.preventDefault();

    const listItem = document.createElement('li')
    listItem.textContent= e.target.todo.value;
    list.append(listItem);
    //document.querySelector('input').value.reset()
    formz.reset()

    listItem.addEventListener('click', () =>{
        listItem.style.textDecoration = 'line-through';
    })
})






