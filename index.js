
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const newList = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const myText = `${input.value}`;
  const toDo = document.createElement('li');

  toDo.textContent = myText;
  newList.append(toDo);
  toDo.addEventListener('click', (event) => {
    event.preventDefault();
    toDo.style.textDecoration = 'line-through';
  });
  form.reset();
});