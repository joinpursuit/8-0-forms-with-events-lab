// // console.log("Code your solution!")
// const toDoform = document.querySelector("form");
// // console.log(form);
// // const task = document.querySelector("#lister")

// toDoform.addEventListener("submit", (event) =>{
//     event.preventDefault()

//     const li = document.createElement("li");
//     li.textContent = task.value

//     const ul = document.querySelector("ul")

//     ul.append(li)

//     form.reset()
// })

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