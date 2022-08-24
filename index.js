// console.log("Code your solution!")

const form = document.querySelector('form')
const ul = document.querySelector('ul')
// const input = document.querySelector('input')
// const button = document.querySelector('button')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(event)
  const li = document.createElement('li');

  li.textContent = event.target.list.value;
  ul.append(li);

  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
  });
  form.reset();
});

