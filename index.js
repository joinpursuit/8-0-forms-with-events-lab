// let userInput;
const toDoList = document.createElement('ul');
const input = document.querySelector("form");
input.after(toDoList);

const form = document.querySelector("#to-do");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  function createListElem(inpt) {
    const thingToDo = document.createElement('li');
    const itemDelete = document.createElement('button');

    itemDelete.addEventListener("click", (event) => {
        thingToDo.remove();
    });

    thingToDo.textContent = inpt;

    thingToDo.addEventListener("click", (event) => {
        thingToDo.style.textDecoration = "line-through";
    });

    itemDelete.textContent = "Delete";
    itemDelete.style.marginLeft = "25px";
    thingToDo.append(itemDelete);

    toDoList.append(thingToDo);
    event.target.reset();

    thingToDo.classList.add("list-elem");
    itemDelete.classList.add("button-elem")
  }


  const userInput = document.querySelector("#user-input-id");
  
  if (!userInput.value) {
    const p = document.createElement('p');
    p.textContent = 'Error. Todo cannot be empty';
    toDoList.before(p);
  } else if (userInput.value.match(/\n/)) {
    const allInputs = userInput.value.split(/\n/g);
    for (const input of allInputs) {
        createListElem(input);
    }
  } else {
    createListElem(userInput.value);
  }
});

// CSS Styling


