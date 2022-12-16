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
    newItem.textContent = event.target.todo.value + " ";

    //BONUS
    //clear the input box
    event.target.todo.value = "";

    //put the new item at the end of the list
    list.append(newItem);  

    //BONUS
    //make a button
    const delBut = document.createElement("button");
    //set name on button
    delBut.textContent = "Delete";
    //put button at the end of the li element
    newItem.append(delBut);
    //tell button what to do when clicked
    delBut.addEventListener("click", (event) => {
        event.preventDefault();
        //remove the whole list item
        newItem.remove();
    })

    //add click event to the newItem
    newItem.addEventListener("click", () => {
        //HALF BONUS HALF REQUIRED
        //toggles crossout when clicked
        newItem.style.textDecoration === ("line-through") ? newItem.style.textDecoration = "none" : newItem.style.textDecoration = "line-through";
    })
    //make the error message go away
    empty.style.display = "none";
}

function showErrorMessage() {
    //make the error message show up
    empty.style.display = "inline";
}

