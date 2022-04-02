const form = document.querySelector('form');

function createList(todo){
    const li = document.createElement('li');
    li.textContent = todo;
    li.append(document.createElement('br'));
    return li;
}

function generateList(todo){
    const li = createList(todo);
    const ul = document.querySelector('ul');
    ul.append(li);

    li.addEventListener("click", (event) => {
        event.target.style.textDecoration = 'line-through';
    })
}

const p = document.querySelector('p');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!todo.value){
        p.textContent = 'Error! Todo cannot be empty';
        form.append(p);
    } else{
        generateList(todo.value);
    }

    form.reset();
})






