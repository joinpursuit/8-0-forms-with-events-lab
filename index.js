let todoForm = document.querySelector('#todo-item');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let userList = document.querySelector('ul');
    let userInput = event.target['list-item'].value;
    if (!userInput) {
        let p = document.createElement('p');
        p.textContent = 'Error. Todo cannot be empty';
        todoForm.after(p);
    } else {
        let listItem = document.createElement('li');
        listItem.textContent = userInput;
        userList.append(listItem);
        event.target['list-item'].value = '';
    }

    let todoItems = document.querySelectorAll('li');

    for (let li of todoItems) {
        li.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        });
    }
});

