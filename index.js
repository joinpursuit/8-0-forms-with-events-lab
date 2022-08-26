console.log("Code your solution!");
// h1
const headerH1 = document.querySelector(`h1`);
headerH1.textContent = `To-Do List`;
// hr
const hrBreak = document.createElement(`hr`);
headerH1.after(hrBreak);
// ul
const ul = document.createElement(`ul`);
hrBreak.after(ul);
// form
const form = document.createElement(`form`);
form.style.display = `flex`;
form.style.alignItems = `flex-start`;
form.style.columnGap = `6px`;
hrBreak.before(form);
// label
const label = document.createElement(`label`);
label.setAttribute(`for`, `todo-entry`);
label.textContent = `Enter a to-do task: `;
form.append(label);
// input
const formInput = document.createElement(`textarea`);
formInput.setAttribute(`id`, `todo-entry`);
form.append(formInput);
// button
const submit = document.createElement(`button`);
submit.textContent = `SUBMIT`;
submit.setAttribute(`type`, `submit`);
submit.style.margin = `2px`;
form.append(submit);
// error
const errorMessage = document.createElement(`p`);
// form submission
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  if (errorMessage.textContent.length > 0) {
    errorMessage.innerHTML = ``;
  }
  if (formInput.value === ``) {
    errorMessage.innerHTML = `<strong>Error</strong>: please enter a valid element`;
    errorMessage.classList.add(`error-message`);
    form.after(errorMessage);
  } else {
    const li = document.createElement(`li`);
    li.textContent = formInput.value;
    // li.style.display = `inline`
    li.style.marginBottom = `14px`
    li.style.padding = `50px`
    ul.append(li);
    // const deleteButton = document.createElement(`button`);
    // deleteButton.textContent = `X`
    // deleteButton.style.width = `18px`
    // deleteButton.style.backgroundColor = `red`
    // deleteButton.style.height = `16px`
    // deleteButton.type = `submit`
    // deleteButton.style.fontSize = `10px`
    // li.append(deleteButton);
    // const br = document.createElement(`br`)
    // deleteButton.append(br)
    form.reset();
  }
});
// line-through
ul.addEventListener(`click`, (event) => {
  //   console.log(event.target);
  if (event.target.localName === "li") {
    event.target.classList.toggle(`list-item`);
    if (event.target.classList.contains(`list-item`)) {
      event.target.style.textDecoration = `line-through`;
    } else {
      event.target.style.textDecoration = ``;
    }
  }
});
