console.log("Code your solution!");
const headerH1 = document.querySelector(`h1`);
headerH1.textContent = `To-Do List`;
// const breakLine = document.createElement(`br`)
// console.log(breakLine)
// headerH1.after(breakLine)
const ul = document.createElement(`ul`);
headerH1.after(ul);

const form = document.createElement(`form`);
ul.before(form);

const label = document.createElement(`label`);
label.setAttribute(`for`, `todo-entry`);
label.textContent = `Enter a to-do task: `;
form.append(label);

const formInput = document.createElement(`input`);
formInput.setAttribute(`id`, `todo-entry`);
formInput.setAttribute(`type`, `text`);
form.append(formInput);

const submit = document.createElement(`input`);
submit.setAttribute(`type`, `submit`);
form.append(submit);

form.addEventListener(`submit`, (event) => {
    event.preventDefault()
    const li = document.createElement(`li`)
    li.textContent = formInput.value
    ul.append(li)
    form.reset()
});
