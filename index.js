console.log("Code your solution!")
const form = document.getElementById("to-do-list");
form.addEventListener('submit' , (event) => {
    event.preventDefault()
   
    let inputItem = event.target.toDo.value;
    let unList = document.querySelector(`ul`);
    let listItem = document.createElement(`li`);

    listItem.textContent = inputItem;
  unList.append(listItem);
  listItem.addEventListener(`click`, (event) => {
    event.target.style.textDecoration = "line-through";
  });
} )
