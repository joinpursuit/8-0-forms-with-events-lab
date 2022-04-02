

const form = document.querySelector("#inputForm");
const todoList = document.querySelector("#todoList");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = event.target.textInput.value;
    if (!text) {
        document.getElementById("errorMessage").textContent = "Error: Nothing to do!"
    } else {
        document.getElementById("errorMessage").textContent = "";
        let newTodo = document.createElement("li");
        newTodo.textContent = text;
        todoList.append(newTodo);
        form.reset();
    }
});

todoList.addEventListener('click', (e) => {
    e.preventDefault();
    console.log (e.target.style);
    e.target.style.textDecoration = 'line-through';
});