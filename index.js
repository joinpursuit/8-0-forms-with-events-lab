

const taskInput = document.querySelector('textarea'),
      tasks     = document.querySelector('#tasks');
      error     = document.querySelector('p');
      form      = document.getElementById('new-task');
taskInput.focus();
// Adding new task to the list
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(taskInput.value){
        const task = document.createElement("li");
        const taskData = document.createElement('span');
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete Task";
        //task.appendChild(document.createTextNode(taskInput.value)).after(deleteBtn);
        taskData.innerText = taskInput.value;
        task.appendChild(taskData).after(deleteBtn);
        tasks.append(task)
        taskInput.value = '';
        taskInput.focus();
        error.textContent = '';
        error.classList.remove('error');

        // Binding events to list itmes 
        // => Strike task
        task.addEventListener("click", () => {
            task.setAttribute(`style`, `text-decoration: line-through`)
        });
        // => Delete task
        if(tasks.innerHTML!==""){
            const deleteBtns = document.querySelectorAll('#tasks li button');
            for(let btn of deleteBtns){
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    btn.closest('li').remove();
                    taskInput.focus();
                })
            }
        }
        
    }else{
        error.classList.add('error');
        error.innerHTML = '<span>Error. Todo cannot be empty</span>';
        taskInput.focus();
    }
}) 
console.log('>' +tasks.innerHTML)

