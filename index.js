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
        
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.textContent = 'Delete';
        listItem.append(deleteButton);
        event.target['list-item'].value = "";
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });
    }

    let todoItems = document.querySelectorAll('li');

    // for (let li of todoItems) {
    //     console.log(li.style.textDecoration)
    //     li.addEventListener('click', () => {
    //         li.style.textDecoration = 'line-through';
    //         // console.log(li.style.textDecoration)
    //     });
    // }
    
    // for (let li of todoItems){
    //     if (li.style.textDecoration === 'line-through') {
    //         li.addEventListener('click', () => {
    //             li.style.textDecoration = 'none';
    //         });
    //     }
    // }

    for (let li of todoItems) {
        console.log(li.style.textDecoration)
        if (li.style.textDecoration === '') {
            li.addEventListener('click', () => {
                li.style.textDecoration = 'line-through';
            });
        } else if (li.style.textDecoration === 'line-through') {
            li.addEventListener('click', () => {
                li.style.textDecoration = 'none';
            });
        }
    }
});
