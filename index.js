console.log("Code your solution!")

const form = document.querySelector('#todo');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = event.target.todo.value;
    const ul = document.querySelector('ul');
    ul.append(li);

    li.addEventListener('click', (event) => {
        li.style.textDecoration = 'line-through'
    });
});