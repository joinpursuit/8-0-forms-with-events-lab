const ul = document.querySelector('ul')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const li = document.createElement('li')
    li.textContent = event.target.todo.value;
    ul.append(li);
    
    li.addEventListener("click", (event) => {
       li.style.textDecoration = "line-through"
    });
    
    form.reset();
});



