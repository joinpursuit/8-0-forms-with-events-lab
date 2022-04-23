const toDoform = document.querySelector("toDoList")
const task = document.querySelector("#lister")
toDoform.addEventListener("submit", (event) => {
    // stops page refresh
    event.preventDefault()
    //create a li
    const li = document.createElement("li");
    //captured the task value into the li text
    li.textContent = task.value
    //selected the ul located in the html
    const ul = document.querySelector("ul")
    // appended the li in to the ul tag
    ul.append(li)
    //allows the form to reset itself
    form.reset()
})
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