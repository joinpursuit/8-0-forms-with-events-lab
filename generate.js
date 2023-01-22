
function generateTodo(todo){
    const li = document.createElement("li");
    li.textContent += todo
    
    const ul = document.querySelector("ul");
    ul.append(li);

    li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
});
    li.addEventListener("dblclick", function (){
        ul.removeChild(li);
    })
};
