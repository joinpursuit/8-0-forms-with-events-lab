console.log('Code your solution!');
// heading formating
const heading = document.querySelector('h1');
const hr = document.createElement('hr');
const br = document.createElement('br');

heading.innerText = 'My To-Dos';
heading.append(br);
heading.append(hr);

// form formating
const body = document.querySelector('body');
const form = document.createElement('form');
const input = document.createElement('textarea');
const button = document.createElement('button');
const ul = document.createElement('ul');
const p = document.createElement('p');

input.setAttribute('type', 'text');
input.setAttribute('id', 'todo');
input.setAttribute('placeholder', 'type a to-do');
button.setAttribute('type', 'submit');
button.innerText = 'Submit';

body.append(form);
body.append(ul);
form.append(input);
form.append(button);

// Events logic
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!event.target.todo.value) {
    if (ul.contains(p)) {
      console.log('tell the user to chill...');
    }
    p.textContent = 'Error: Todo cannot be applied.';
    ul.prepend(p);
  } else {
    p.textContent = ""
    for (let line of todo.value.split('\n')) {
      const li = document.createElement('li');
      const reset = document.createElement('button');
      reset.textContent = 'done?';
      li.textContent = line;
      ul.append(li);
      li.append(reset);

      li.addEventListener('click', () => {
        if (li.hasAttribute('style')) {
          li.removeAttribute('style');
        } else {
          li.style.textDecorationLine = 'line-through';
        }
      });
      reset.addEventListener('click', () => {
        li.remove(ul);
      });
    }
  }
  form.reset();
});
