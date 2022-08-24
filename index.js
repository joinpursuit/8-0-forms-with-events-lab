// console.log("Code your solution!")
const ul = document.querySelector('ul');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = e.target.toDoList.value;
})
