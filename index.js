function toDoList(toDo) {
    const li = document.createElement("li");
    li.textContent += toDo;
    return li;
}
function generateToDo(toDo) {
    const li = toDoList(toDo);
    const ul = document.querySelector("ul");
    ul.append(li);

   
    li.addEventListener('click', (event) =>{
    li.setAttribute("style", "text-decoration: line-through solid rgb(0,0,0") 
    })

}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    // console.log(event.target)
  event.preventDefault();
generateToDo(event.target.toDo.value)
form.reset();
})

