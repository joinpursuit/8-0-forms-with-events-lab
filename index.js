document.querySelector('h1').textContent = "My Todo";
const body  = document.querySelector('body');
const form = document.createElement('form');
const textInput = document.createElement('textarea');
textInput.setAttribute('type','text');
textInput.setAttribute('name','textarea');
textInput.setAttribute('required', 'true');
const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Submit';
const list = document.createElement('ul')

body.append(form, list)
form.append(textInput, button)

form.addEventListener('submit', (event) => {
event.preventDefault();

const words = event.target.textarea.value.split('\n')
for (let word of words) {
const item = document.createElement('li');
item.textContent = word;
item.style.textDecoration = 'none'
item.addEventListener('click', (event) => {
event.target.style.textDecoration === 'none' ?    
event.target.style.textDecoration = "line-through" :
event.target.style.textDecoration = 'none';
});
const dButton = document.createElement('button');
dButton.textContent = "delete"
dButton.addEventListener('click', (event) => event.target.parentElement.remove()
);
item.append(dButton);
list.append(item);
event.target.reset();
    };
});



