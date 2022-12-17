let taskField = document.querySelector("#taskText");
let taskList = document.querySelector("#taskList");
let errorMessage = document.querySelector("#error");
errorMessage.style.display = "none";
document.addEventListener("submit",(event) => {
    event.preventDefault();
    if (taskField.value.trim() != ""){
        tasks = taskField.value.trim().split("\n");
        tasks.forEach((task) => {
            taskList.innerHTML += `<li class="task">${task}</li><button>Remove</button>`
        })
        errorMessage.style.display = "none";
        taskField.value = ""
    }
    else{
        errorMessage.style.display = "block";
    }
});
taskList.addEventListener("click",(event) => {
    if (event.target.style.textDecorationLine != "line-through"){
        event.target.style.textDecorationLine = "line-through";
    }
    else{
        event.target.style.textDecorationLine = "none";
    }
})
