const form = document.querySelector("form");
const list = document.querySelector("ul");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = event.target.todo.value;
    list.append(newTask);
    newTask.addEventListener("click",() => {
        newTask.style.textDecoration = "line-through";
    })
    if (newTask === "line-through") {
        newTask.addEventListener("click",() => {
            newTask.style.textDecoration = "none";
        })
    }
} )


