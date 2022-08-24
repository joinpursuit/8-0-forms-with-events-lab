
// const toDoBox = document.querySelector(`#toDoBox`); //text box
const submitBtn = document.querySelector(`#submit`); //submit butn
const toDoList = document.querySelector(`#toDoList`); //unordered list
const form = document.querySelector(`form`);


// li.textContent += toDo;

// if (toDoBox)


form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const listItem = document.createElement(`li`);
    listItem.textContent += event.target.toDoBox.value;
    toDoList.append(listItem);
listItem.addEventListener(`click`, (event) => {
    listItem.style.textDecoration = `line-through`
})
})


// toDoBox.reset();
  
