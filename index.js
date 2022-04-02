
const tasksInput = document.querySelector('textarea'),
      tasksList  = document.querySelector('#tasks');
      error      = document.querySelector('p');
      form       = document.querySelector('#new-task');
tasksInput.focus();
// Adding new task to the list
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(tasksInput.value){
        const tasks = tasksInput.value.split('\n')
        tasks.forEach((task) => {
            newTask(task)
        })
        
        form.reset()
        tasksInput.focus();
        error.textContent = '';
        error.classList.remove('error');

        // => Binding delete list item event
        if(tasksList.innerHTML!==""){
            const deleteBtns = document.querySelectorAll('#tasks li button');
            for(let btn of deleteBtns){
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    btn.closest('li').remove();
                    tasksInput.focus();
                })
            }
        }
    }else{
        error.classList.add('error');
        error.innerHTML = '<span>Error. Todo cannot be empty</span>';
        tasksInput.focus();
    }
})

function newTask(item){
    const taskItem  = document.createElement("li"),
          deleteBtn = document.createElement("button"),
          iconItem  = document.createElement("i");
    deleteBtn.innerHTML = '<i class="fa fa-solid fa-trash-can"></i>';
    
    iconItem.classList.add('fa', 'item', 'fa-solid', 'fa-check')
    taskItem.textContent = item;
    taskItem.appendChild(iconItem);
    taskItem.appendChild(deleteBtn);
    tasksList.append(taskItem)
    // => Binding list item event
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle('striked');
        if(iconItem.classList.contains('fa-check')){
            iconItem.classList.remove('fa-check');
            iconItem.classList.add('fa-x')
        }else{
            iconItem.classList.remove('fa-x');
            iconItem.classList.add('fa-check');
        }
    });
}