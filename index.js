const form = document.querySelector('form');
const ul = document.querySelector('.todoList');
const errorMessageField = document.querySelector('p.error');
let li;
let hr;

// Create a variable that will contain all of the 'li' elements 
let todoListElements = [];


// Create an event listener for when the user inputs text and submits
form.addEventListener('submit', updateTodoList);

// Create an event listener to reset the errorMessageField when the user clicks inside of the input field
form.todoText.addEventListener('input', removeErrorText);
form.todoText.addEventListener('click', removeErrorText);

// Write a function that will create an 'li' element for each user todo submission
function updateTodoList(event) {
    event.preventDefault();

    // Create 'li' element 
    li = document.createElement('li');
    // Create a delete button that will go next to each li element
    const todoDeleteButton = document.createElement('button');
    hr = document.createElement('hr');
    hr.classList.add('todoLine');
  
    // Update the text for the 'li' element to be the same as the user todo submission text
    li.innerText = event.target.todoText.value;

    // Check to see if the input is empty and call printError() if it is empty, otherwise append the 'li' element to the 'ul' element
    if (form.todoText.value.trim() === "") {
        printError();
    } else {
        ul.append(li);
        li.after(hr);
        todoListElements = document.querySelectorAll('li');
        // Loop through each 'li' element and add an event listener for each element
        todoListElements.forEach(todoLi => {
            todoLi.addEventListener('click', strikeThrough);
            todoDeleteButton.classList.add('deleteButton');
            todoDeleteButton.textContent = 'DEL';
            todoLi.append(todoDeleteButton);  
            todoDeleteButton.addEventListener('click', removeLiElement);
            form.reset();
        });
        
    }
    
    // Reset the input field  and/or the errorMessageField after the user submits
    form.reset();
}

// Write a function that will display your error message when the input field is left blank
function printError() {
    // Write error message and make it the text for the 'p.error' element
    errorMessageField.innerText = 'Error: Todo field must not be empty!';
    
}

// Write a function to remove the errorMessageField text
function removeErrorText() {
    errorMessageField.innerText = '';
}


// Write a function that will change the text-decoration of the clicked 'li' element to line-through
function strikeThrough(event) {

   if (event.target.style.textDecoration !== 'line-through') {
    event.target.style.textDecoration = 'line-through';
   } else {
    event.target.style.textDecoration = 'none';
   }
}

// Write a function 'removeLiElement' that removes the li element and '.todoLine' element when the delete button is pressed
function removeLiElement() {
    this.parentNode.nextSibling.remove();
    this.parentNode.remove();
    removeErrorText();
}



