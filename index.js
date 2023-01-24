
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = event.target.todo.value;
    generateTodo(todo);
    form.reset();
});

