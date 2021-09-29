console.log("Code your solution!")
//select the submit button
const submitButton = document.querySelector("button[type='submit']");
//add an event listener to the submit button
//when a user presses submit I want to 
//1. queryslect ul, 
//2. create an li with the text content of the items in the submit area
//3. the add a li to the ul as a child and the text content equal the content that was in the field

const submittedList = document.querySelector(".submitted-list")
const alert = document.createElement("p");
const toDoItem = document.createElement("li");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const typedToDoItem = document.getElementById("to-do-items").value.trim();
    if (typedToDoItem.length === 0) {
        alert.textContent = "GET TO IT! ADD SOMETHING!";
        submittedList.before(alert);
    }
    if (typedToDoItem.length > 0) {
        alert.remove();
        const toDoItem = document.createElement("li");
        toDoItem.textContent = typedToDoItem;
        submittedList.append(toDoItem);
        toDoItem.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.style["text-decoration"] = "line-through";
        })
    }
})