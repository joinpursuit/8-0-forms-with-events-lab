
// grab a form element from the FOM and store it into a variable
const formElement = document.querySelector("form");


//add an ' event listener ' for the 'submit' event
formElement.addEventListener("submit", (event) => {
//prevent the default 'action' of the 'form element
event.preventDefault();
//console log it.
//console.log(event.target.textInput.value)

//create an 'li'element
// let listDiv = document.createElement("div");
// listDiv.classList.add("listDiv")
// let deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";

let listElement = document.createElement("li");

//get the 'value' of the element with 'textInput' id and assign it to a variable
//method #1
//const textInputValue = document.querySelector("#textInput".value);

//Method #2 - is that input supposed to be in the event.
const textInputValue = event.target.textInput.value;

//assign the 'text-content' of the list element to the 'value' from the 'text-input'
listElement.textContent = textInputValue;

//addEventListener BEFORE appending it
//add an eventListener of type 'click' when the 'list' element is clicked by user ('strikethrough')
listElement.addEventListener("click", handleClick => {
console.log(handleClick.target)
//we know the target is the li element -- we want to target its style
handleClick.target.style.textDecoration = "line-through";
});

 //deleteButton.addEventListener("click", handleClick => {
     //handleClick.target.
//});
//listDiv.append(listElement);
//listDiv.append(deleteButton);
//Method #1
const unorderedListElement = document.querySelector("ul");
//Method #2
//document.querySelector("ul").append(listElement)
// append the modified 'li' element 'ul' element
//how do i delete an li from before?
unorderedListElement.append(listElement);
event.target.textInput.value = ""
});





