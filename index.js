
let userForm = document.querySelector("#inputForm");

let pTag = document.createElement("p")

userForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    let userInput = event.target["toDoList"].value

    if(!userInput){
        pTag.textContent = "Please enter an item";
         userForm.after(pTag);
    } else {
        let unorderedList = document.querySelector("ul");
        let listItem = document.createElement("li");
        listItem.textContent = userInput;

        listItem.addEventListener("click", (event)=>{
            if(!event.target.style.textDecoration) {
                event.target.style.textDecoration = "line-through";
            } else {
                event.target.style.textDecoration = "none"; 
            }

         });

        unorderedList.append(listItem);
        pTag.remove()
        event.target["toDoList"].value = "";
    }

});



