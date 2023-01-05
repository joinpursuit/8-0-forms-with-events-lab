console.log("Code your solution!")
const form = document.querySelector('form');
const ul = document.querySelector('ul');

// creates an event call back within form when the submit is triggered.
form.addEventListener('submit', (event) => {
    // prevents page from default action
    event.preventDefault();
    // the callback is to create an li
    const li = document.createElement('li');
    // the text of the li will be the value of what user inputted 
    li.textContent = event.target.todo.value;
    // append the new li to ul
    ul.append(li);

    // add an event to the li using click
    li.addEventListener('click', () => {
        // when the li is clicked a line through should appear
        li.style.textDecoration = 'line-through';
      });

    })