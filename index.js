console.log("Code your solution!")
const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = event.target.todo.value;
    ul.append(li);
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
      });

    })