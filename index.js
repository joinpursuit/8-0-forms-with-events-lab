//console.log('Code your solution!');

const form = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // no refresh

  let inputted = event.target.todo.value;
     console.log(inputted)
     console.log(typeof inputted)

  const unordered = document.querySelector('ul');
  const newListItem = document.createElement('li');
  
  newListItem.textContent = inputted;
  unordered.append(newListItem);
  event.target.reset();

  newListItem.addEventListener('click', (event) => {
    event.target.style.textDecoration = 'line-through';
  });
});
