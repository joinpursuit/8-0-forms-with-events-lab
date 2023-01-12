console.log("Code your solution!")

const form = document.querySelector("form");
const input = document.querySelector('input')
const list = document.querySelector("ul");
const empty = document.getElementById("error")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //Adds item to list, if not empty
    event.target.todo.value ? addListItem(event) : errorMessage();
})

function addListItem(event) {
     //Creates new list item and gives it the value of the input box
    const newTodo = document.createElement("li");
    newTodo.textContent = event.target.todo.value;

    //Clears the input box
    form.reset();

    //Slaps it on the end
    list.append(newTodo);  

    //Delete button creation, give it a name, and add it to end of list
    const delBut = document.createElement("button");
    delBut.textContent = "Delete";
    newTodo.append(delBut);
    //Telling the button what to-do...get it...to-do...
    delBut.addEventListener("click", (event) => {
        event.preventDefault();
        newTodo.remove();
    })

    //Strikes through when clicked, used ternary to allow for un-strike-through as well
    newTodo.addEventListener("click", () => {
        newTodo.style.textDecoration === ("line-through") ? newTodo.style.textDecoration = "none" : newTodo.style.textDecoration = "line-through";
    })
    //Error message goes away at end of function
    empty.style.display = "none";
}

function errorMessage() {
    //Error message shows up, this took me forever to get to work
    empty.style.display = "inline";
}
