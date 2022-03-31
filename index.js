const list = document.querySelector('#list');
let listActive = false;
console.log(list.hasChildNodes())
// Adding new task to the list
const form = document.getElementById('new-task');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const task = document.querySelector('textarea');
    li.appendChild(document.createTextNode(task.value));
    list.append(li)
    listActive = true;
    task.value = '';
    console.log(listActive)
    console.log(list.hasChildNodes())
    const tasks = document.querySelectorAll('#list li')

    li.addEventListener("click", () => {
        li.setAttribute(`style`, `text-decoration: line-through`)
    });
}) 