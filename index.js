console.log("Code your solution!")

//get the form
const form = document.querySelector("form");
//get the list
const list = document.querySelector("ul");
//get the error message paragraph
const empty = document.getElementById("empty")

form.addEventListener("submit", (event) => {
    //tell it not to do what it normally would
    event.preventDefault();
    //add the item if the box isnt empty
    event.target.todo.value ? addListItem(event) : showErrorMessage();
})

function addListItem(event) {
     //create the new list item
    const newItem = document.createElement("li");
    //give it the value of the input box
    newItem.textContent = event.target.todo.value;
    //put the new item at the end of the list
    list.append(newItem);  
    //add click event to the newItem
    newItem.addEventListener("click", () => {
        newItem.style.textDecoration = "line-through";
    })
    empty.style.display = "none";
}

function showErrorMessage() {
    empty.style.display = "inline";
}