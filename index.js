

const form = document.querySelector("#inputForm");
const todoList = document.querySelector("#todoList");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = event.target.textInput.value;
    console.log (text);
    if (!text) {
        document.getElementById("errorMessage").textContent = "Error: Nothing to do!"
    } else {
        document.getElementById("errorMessage").textContent = "";
        text = text.split('\n');
        for (let item in text) {
            if (!text[item]) continue;
            let count = document.getElementsByClassName('todos').length;
            let newTodo = document.createElement("li");
            newTodo.textContent = text[item];
            newTodo.setAttribute('id', `todo${count}`);
            newTodo.setAttribute('class', 'todos');
            let newDelete = document.createElement('button');
            newDelete.textContent = "Delete";
            newDelete.setAttribute('id', `${count}`);
            newDelete.setAttribute('class', 'deleters');
            newTodo.append(newDelete);
            todoList.append(newTodo);
        }
        form.reset();
    }
});

todoList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'todos') {
        if (e.target.style.textDecoration === 'line-through') {
            e.target.style.textDecoration = 'none';
        } else {
            e.target.style.textDecoration = 'line-through';
        }
    } else if (e.target.className === 'deleters') {
        let deleteMe = document.getElementById(`todo${e.target.id}`);
        deleteMe.remove();
    }

});