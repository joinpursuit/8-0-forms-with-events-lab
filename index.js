
//This function creates an li, adds a textNode to li.
//Returns complete list item
function contactTemplate(name) {
    const li = document.createElement("li");
    li.textContent += name;
    return li;
}
//This function assigns above function to list item. It also selects ul and appends li as a child of unordered list
function generateContact(name) {
    const li = contactTemplate(name);
    const ul = document.querySelector("ul");
    ul.append(li);
}
//Selects body element
const body = document.querySelector('body');
//Creates a form tag and set an attributes
const form = document.createElement('form');
form.setAttribute('id', 'form-content')
//Creates h1 tag and adds a textNode to h1 tag, then appends h1 to the body 
const h1 = document.createElement('h1');
h1.textContent = "My To-Dos";
body.append(h1);

//Creates an input tag and sets attributes for tag, then appends input tag to the form
const input = document.createElement('input');
//setting key/pair values as attributes to input tag (name)key, (userInput)value
input.setAttribute('name', 'userInput')
input.setAttribute('id', 'name')
input.setAttribute('type', 'text')
form.append(input);
//Creates a Button tag, set attributes and give it a textNode
const submitButn = document.createElement('button');
submitButn.setAttribute('type', 'submit')
submitButn.textContent = 'submit'
//Appends button to form 
form.append(submitButn);
//Appends whole form to body
body.append(form);
//Creates an ul tag
const unOrderedList = document.createElement('ul');
//Appends ul as a sibling of the form tag
form.after(unOrderedList)
//Selects the form using its id
const formQuery = document.querySelector("#form-content");
//We are calling EventListener on the form tag w/2 arguments, the type (submit) and a callback (event).
formQuery.addEventListener("submit", (event) => {
    //Expected to stop the default behavior of pressing submit button
    event.preventDefault();
    //Creates variable to store the value of userInput
    // console.log(event.target.userInput.value);
    const name = event.target.userInput.value;
    //Calling above function that selects ul and appends li as a child of unordered list
    generateContact(name);
    //Resets the input field of above function
    event.target.reset()
});



//Selects unordered list to add an EventListener w/2 arguments
document.querySelector("ul").addEventListener("click", (event) => {
    //Expected to stop the default behavior of pressing on ul
    event.preventDefault();
    //When target ul is clicked a text-decoration will be applied to that ul
    event.target.style["text-decoration"] = "line-through";
  });

