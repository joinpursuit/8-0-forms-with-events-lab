const list = document.querySelector('#list');
// Adding new task to the list
const form = document.getElementById('new-task');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const task = document.querySelector('textarea');
    li.appendChild(document.createTextNode(task.value));
    list.append(li)
    task.value = '';

    li.addEventListener("click", () => {
        li.setAttribute(`style`, `text-decoration: line-through`)
    });
}) 