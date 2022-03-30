console.log("Code your solution!")

const form = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
event.preventDefault();// no refresh

const inputted = event.target.todo.value;
const unordered = document.querySelector("ul");

// error message setup
if (!inputted) {
    let errorP= document.createElement("p");
    errorP.textContent = "Error: need input!";
    console.log(errorP)
}

const newListItem = document.createElement("li")
newListItem.textContent = inputted//whatever i typed in the box
unordered.append(newListItem)

newListItem.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through"
})
});
