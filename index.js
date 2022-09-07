const button = document.getElementById('button');
const inputo = document.getElementById('to-do');
const task = document.getElementById('toDoContainer')



button.addEventListener('click', function () {
    // event.preventDefault();

    let li = document.createElement('li');
    li.innerText = inputo.value;

    task.appendChild(li);

    inputo.value = "";

    li.addEventListener('click', function() {
      li.style.textDecoration = "line-through";
     })

     li.addEventListener('dblclick', function() {
        task.removeChild(li);
     })   
}
)


