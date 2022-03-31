console.log('Code your solution!');

const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const text = input.value;
	const submitted = document.createElement('li');
	submitted.textContent = text;
	list.append(submitted);

	list.addEventListener('click', (event) => {
		submitted.style.textDecoration = 'line-through solid';
	});
});
