let form = document.querySelector("#my-do-list");


    form.addEventListener("submit", (event)=>{
        event.preventDefault();
    
        let newList = document.createElement("li");
        let listTask = document.querySelector("ul");
        let userInput = event.target["to-do-list"].value;
            newList.textContent = userInput
            listTask.append(newList)
            event.target["to-do-list"].value = "";
    
        // if(!userInput){
        //     let paragraph = document.createElement("p");
        //     form.after(paragraph);
        //     paragraph.textContent = "Error.Todo cannot be empty";

            newList.addEventListener("click", (event) =>{
            if(event.target.style.textDecoration === "line-through") {
                event.target.style.textDecoration = "";
            }else{
                event.target.style.textDecoration = "line-through";
            }
        })
})



