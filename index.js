//const input = document.getElementById("#todo"); //why this doesn't work ?
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const h1 = document.querySelector("h1");
h1.innerText = "My To-Dos";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoDisplay = document.createElement("li");

  const todoInput = e.target.todo.value; //had to put 'todo' instead of input.
  todoDisplay.innerHTML = todoInput;
  ul.append(todoDisplay);

  todoDisplay.addEventListener("click", (e) => {
    e.preventDefault();
    todoDisplay.style.textDecoration = "line-through";
  });

  e.target.todo.value = ""
});

// const addTodo = (event) => { //this is how johnathan did the calculator
//   event.preventDefault();

// };
// const ul = document.createElement("ul");
