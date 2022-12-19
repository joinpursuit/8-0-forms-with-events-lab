const formElement = document.querySelector("form");
formElement.addEventListener("submit", event => {
    event.preventDefault();
    
    const toDoFormValue = event.target.toDoForm.value;

    if (toDoFormValue === "") {
        document.querySelector("p").textContent = "Error, please enter text."
    } else {
        const listEl = document.createElement("li");

        document.querySelector("p").textContent = "";

        listEl.textContent = event.target.toDoForm.value;

        listEl.addEventListener("click", handleClick => {
            handleClick.target.style.textDecoration = "line-through"
        });

        const unorderedList = document.querySelector("ul");

        unorderedList.append(listEl);
    }
});
