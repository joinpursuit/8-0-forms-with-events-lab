let form = document.querySelector("form");
let newList = document.createElement("li");
let listTask = document.querySelector("ul");
listTask.append(newList);

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let userInput = event.target["to-do-list"].value;
        newList.textContent = userInput;

        if(!userInput){
            let paragraph = document.createElement("p");
            form.after(paragraph);
            paragraph.textContent = "Error.Todo cannot be empty";
        }
            newList.addEventListener("click", (event) =>{
            if(!event.target.style.textDecoration) {
                event.target.style.textDecoration= "line-through";
            }else{
                event.target.style.textDecoration = "none";
            }
        })
})


