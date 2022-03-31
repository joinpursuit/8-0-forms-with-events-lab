//console.log('Code your solution!');

const form = document.getElementById('todo-list');
const unordered = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // no refresh

  const inputted = event.target.todo.value;

  // error message setup
  // if (!event.target.value) {
  //   let errorP = document.createElement('p');
  //   errorP.textContent = 'Error: need input!';
  //  unordered.before(errorP)
  //   console.log(errorP);
  // }

  const newListItem = document.createElement('li');
  newListItem.textContent = inputted;
  unordered.append(newListItem);
  event.target.reset();

  newListItem.addEventListener('click', (event) => {
    event.target.style.textDecoration = 'line-through';
  });
});
