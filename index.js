//creating the document;
document.querySelector('h1').textContent = 'My Todo';
const body = document.querySelector('body');
const form = document.createElement('form');
const textInput = document.createElement('textarea');
textInput.setAttribute('type', 'text');
textInput.setAttribute('name', 'textarea');
textInput.setAttribute('required', 'true');
const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Submit';
const list = document.createElement('ul');
//pushed it to the DOM
body.append(form, list);
form.append(textInput, button);
//Created Event Listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const words = event.target.textarea.value.split('\n');
  for (let word of words) {
    //create the li
    const item = document.createElement('li');
    item.textContent = word;
    //set default for text decoration
    item.style.textDecoration = 'none';
    //added event listener to toggle line through
    item.addEventListener('click', (event) => {
      event.target.style.textDecoration === 'none'
        ? (event.target.style.textDecoration = 'line-through')
        : (event.target.style.textDecoration = 'none');
    });
    //create the delete button
    const dButton = document.createElement('button');
    dButton.textContent = 'Delete';
    //added event listener to delete the whole item from list
    dButton.addEventListener('click', (event) =>
      event.target.parentElement.remove()
    );
    //Push it to the DOM
    item.append(dButton);
    list.append(item);
    //reset after the push
    event.target.reset();
  }
});
