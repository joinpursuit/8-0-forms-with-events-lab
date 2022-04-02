//console.log("Code your solution!")

const form = document.querySelector("#toDoList");
const ul = document.querySelector("#list");
const input = document.querySelector("input");
const p = document.querySelector("p");


form.addEventListener('submit', (event) => {
event.preventDefault();

    if (input.value === ""){
        p.textContent = "Error. Todo cannot be empty";
    }

    const li = document.createElement("li");
    //console.log(li);
    li.textContent = event.target.task.value;
    ul.append(li);
    form.reset();
});

//const allLi = document.querySelectorAll('li');
//console.log(allLi);

    ul.addEventListener("click", (event) => {
        event.target.setAttribute("style","text-decoration: line-through");
    })









