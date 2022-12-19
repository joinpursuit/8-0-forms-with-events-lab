// creating variable to represent value of form element
const formElement = document.querySelector("form");
// adding an event listener to formElement variable
// listening for a "submit" event type
formElement.addEventListener("submit", event => {
    // adding .preventDefault to event parameter to prevent form submission
    event.preventDefault();
    // creating variable to represent value of event.target.toDoForm.value
    const toDoFormValue = event.target.toDoForm.value;
    // if toDoFormValue equals an empty string
    if (toDoFormValue === "") {
        // textContent of the p element below the form element will equal the string "Error, please enter text."
        document.querySelector("p").textContent = "Error, please enter text."
    } else {
        // create variable representing a new li element 
        const listEl = document.createElement("li");
        // textContent of the p element below the form element will equal an empty string
        document.querySelector("p").textContent = "";
        // textContent of listEl variable equals value of toDoForm (id for submit button)
        listEl.textContent = event.target.toDoForm.value;
        // adding an event listener to listEl variable
        // listening for a "click" event type"
        listEl.addEventListener("click", handleClick => {
            // changing the textDecoration style of li item so it's crossed out
            handleClick.target.style.textDecoration = "line-through"
        });
        // creating variable to represent value of ul element 
        const unorderedList = document.querySelector("ul");
        // appending listEl variable to unorderedList variable
        unorderedList.append(listEl);
    }
});
