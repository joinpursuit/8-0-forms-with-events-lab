console.log("Code your solution!");
let todoList = document.querySelector("#todo-list");


//unordered list created
//must be created outside the function so it doesn't repeat


//arrow function
todoList.addEventListener("submit", (event)=>{
//checking if the action is completed before continueing
    event.preventDefault();
//if it exist grab it, if it doesn't exist grab it
    if(!document.querySelector("ul")){
        let ul = document.createElement("ul");
        todoList.after(ul);
    } 
    let ul = document.querySelector("ul");
//line items created
    let li = document.createElement("li");
//input targeted
    let todos = event.target["textbox"].value;
//list items become todos aka user input
    li.textContent = todos;
//list items are added to unordered list 
    // ul.append(li);
// //accessing the value of the target "textbox" aka userInput and setting equal to empty string
//     todos = "";
//if userInput is empty produce an error message
    if(!todos) {
        let p = document.createElement("p");
        p.textContent = "Cannot submit: more information needed";
        todoList.after(p);
    } else {
        event.target["textbox"].value = "";
        ul.append(li); 
        li.addEventListener("click", e => {
            if(e.target.style.textDecoration !== "line-through"){
                e.target.style.textDecoration = "line-through";
            } else{
                e.target.style.textDecoration = "none";
            }
            
        });
    };
    
    
});




