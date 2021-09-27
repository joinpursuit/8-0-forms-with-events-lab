const body = document.querySelector('body');
const form = document.createElement('form');
form.setAttribute('id', 'form-content')
const h1 = document.createElement('h1');
h1.textContent = "My To-Dos";
body.append(h1);


const input = document.createElement('input');
input.setAttribute('name', 'userInput')
input.setAttribute('id', 'name')
input.setAttribute('type', 'text')
form.append(input);

const submitButn = document.createElement('button');
submitButn.setAttribute('type', 'submit')
submitButn.textContent = 'submit'

form.append(submitButn);

body.append(form);

const unOrderedList = document.createElement('ul');
form.after(unOrderedList)
const formQuery = document.querySelector("#form-content");

formQuery.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target.userInput.value;
    generateContact(name);
    event.target.reset()
});
form.append(unOrderedList);



























//console.log("Code your solution!")
