console.log("Code your solution!")

const formTag = document.querySelector('form');

formTag.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = event.target.todo.value;
    console.log(userInput);
    const list = document.createElement('li');
    list.textContent = userInput;

    const unorderedList = document.querySelector('ul');
    unorderedList.append(list);

    const todos = document.querySelectorAll('li');
    console.log(todos);

    todos.forEach((todo) => {
        todo.addEventListener('click', (event) => {
            todo.style.textDecoration = 'line-through solid';
        })
        todo.addEventListener('dblclick', (event) => {
            todo.style.textDecoration = 'none';
        })
    })
})

