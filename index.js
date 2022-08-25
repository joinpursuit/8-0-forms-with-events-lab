//console.log("Code your solution!")

let form = document.querySelector('form');
let ul = document.querySelector('ul');
let text = document.querySelector("input[type='text']");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!text.value) {
    paragraph.textContent = 'Error! Please fill in your to-do task.';
  }

  const li = document.createElement('li');
  li.textContent = text.value;
  ul.append(li);

  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
  });
});
