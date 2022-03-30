/** @format */

console.log('Code your solution!');

const form = document.querySelector('form');
const toDo = document.querySelector('ul');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const li = document.createElement('li');
	const input = event.target.toDoList.value;
	li.textContent = input;
	toDo.append(li);

	toDo.addEventListener('click', (event) => {
		const list = document.querySelectorAll('li');
		list.forEach((list) => {
			event.target.style.textDecoration = 'line-through solid';
		});
	});
});
