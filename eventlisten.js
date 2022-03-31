const form = document.getElementById('new-todo');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('To-Do Request Sent!');

  const userToDo = event.target.todo.value;

  console.log(event.target.todo.value);

  const toDoList = document.querySelector('ul');

  const toDoEntry = document.createElement('li');

  toDoEntry.textContent = userToDo;

  toDoList.append(toDoEntry);

  event.target.todo.value = ''; ///Code for reverting textboxes to an empty state after entering a ToDo

  let toDoEntries = document.querySelectorAll('li');

  for (let todo of toDoEntries) {
    todo.addEventListener(
      'click',
      () => (todo.style.textDecoration = 'line-through'),
    );

    todo.addEventListener('dblclick', () => {
      ///Code for removing dashed line from ToDo bonus, doesn't pass the test.
      todo.style.textDecoration = 'unset';
    });
  }
});
