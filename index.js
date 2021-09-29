let userForm = document.querySelector("form");
let list = document.querySelector("#items");
   
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = todo.value;
    let para = document.querySelector("ul p");
        if(!input && !para) {
            let tag = document.createElement("p");
            tag.textContent = "Error. Todo cannot be empty";
            list.prepend(tag);
            } else if (input && para) {
            para.remove();

            let listItem = document.createElement("li");
            listItem.textContent = input;
            list.append(listItem);

            listItem.style.margin = "16px";
            todo.value = "";
            } else if (input && !para) {
                let listItem = document.createElement("li");
                listItem.textContent = input;
                list.append(listItem);
                listItem.style.margin = "16px";
                todo.value = "";
            }

    let elements = document.querySelectorAll("li");
            for(let el of elements) {
                el.addEventListener("click", (event) => {
                el.style.textDecoration = "line-through solid rgb(0, 0, 0)"; 
            });  
        }
    });