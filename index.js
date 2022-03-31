

const taskInput = document.querySelector('textarea');
const tasks = document.querySelector('#tasks');
const error = document.querySelector('p');
// Adding new task to the list
const form = document.getElementById('new-task');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(taskInput.value){
        const task = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete Task";
        task.appendChild(document.createTextNode(taskInput.value)).after(deleteBtn);
        tasks.append(task)
        taskInput.value = '';
        error.textContent = '';

        // Binding events to list itmes 
        task.addEventListener("click", () => {
            task.setAttribute(`style`, `text-decoration: line-through`)
        });

        
    }else{
        error.textContent = 'Error. Todo cannot be empty';
    }
}) 
console.log('>' +tasks.innerHTML)
if(tasks.innerHTML!==""){
    console.log(tasks.innerHTML)
    console.log(tasks)
    for(let task of tasks){
        const taskDelete = document.querySelector('#tasks li button');
        taskDelete.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('>>>')
            this.remove();
        })
    }
}
