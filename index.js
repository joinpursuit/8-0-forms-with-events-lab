console.log("Code your solution!")

const form = document.querySelector('form');
const ul = document.querySelector('ul');
//created from .html doc to access in this .js doc

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // below adds new to do list and second to do on the list(2 tests)
    const li = document.createElement('li');
    li.textContent = event.target.todo.value;
    ul.append(li);

    //strikes li when clicked
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
      });

    })