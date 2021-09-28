let todoList = document.querySelector("#todo-form");

todoList.addEventListener("submit", (event)=>{
    event.preventDefault();
    let todoListValue = event.target["todo-list"].value
    let ul = document.querySelector("ul");
    let newLi = document.createElement("li");
    newLi.textContent = todoListValue
    ul.append(newLi);
    event.target["todo-list"].value = ""; 

    let messages = [];
    if(todoListValue.value === "" || todoListValue === null){
        messages.push("Error! Todo cannot be empty");
    }



    newLi.addEventListener('click', (event) =>{
        event.target.style.textDecoration = "line-through"; 
        
      })
})



