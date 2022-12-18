const formElement = document.querySelector("form");

formElement.addEventListener("submit", event => {
    event.preventDefault();

    if( event.target.textInput.value === "" ){

        document.querySelector("p").textContent = "Please provide a valid To-Do.";

    }else{

        document.querySelector("p").textContent = "";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delBtn");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", handleClick => {
            handleClick.target.parentNode.remove()
        });
    
        const listElement = document.createElement("li");
        listElement.classList.add("toDos");
        listElement.textContent = `${event.target.textInput.value}\n`;

        listElement.addEventListener("click", handleClick => {
            let liTextDeco = handleClick.target;   
            liTextDeco.style.textDecorationLine = liTextDeco.style.textDecorationLine === "" ? "line-through" : "";
        });

        listElement.append(deleteBtn);

        const unOrderedListElement = document.querySelector("ul");
        unOrderedListElement.append(listElement);

        event.target.textInput.value = "";

    }
});
