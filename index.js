const list = document.querySelector('#list'),
      li   = document.createElement("li");
// Adding new task to the liat
const form = document.getElementById('new-task');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = document.querySelector('textarea').value;
    li.appendChild(document.createTextNode(task));
    list.append(li)
}) 
