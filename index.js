// console.log("Code your solution!")

// const form = document.querySelector('form')
// const toDo = document.querySelector('ul')
// const button = document.querySelector('button')


// form.addEventListener('submit', (event) => {
// 	event.preventDefault();

// 	const li = document.createElement('li')
// 	// const input = event.target.toDoList.value
// 	li.textContent = input.value;
// 	toDo.append(li)

// const newList = document.querySelectorAll('ul li');


//       li.forEach((li) => {
//          newList.style.textDecoration = 'line-through solid';
//   toDo.addEventListener('click', () => {});
// });
// });

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const newList = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const myText = input.value;
  const toDo = document.createElement('li');
  toDo.textContent = myText;
  newList.append(toDo);

  newList.addEventListener('click', (event) => {
    toDo.style.textDecoration = 'line-through solid';
  });
  form.reset();
});