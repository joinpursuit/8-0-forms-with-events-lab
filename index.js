let userForm = document.querySelector("#user-form");

// add event listener - listen for `submit`
userForm.addEventListener("submit", (event)=>{
    event.preventDefault(); // stop default behavior - stops page from refreshing
    // grab value of `userInput`
    let userInput = event.target["todo-field"].value;

    // create new `li` element; set `textContent` to `userInput`
    let li = document.createElement("li");
    li.textContent = userInput;

    // append `li` to the list
    let ul = document.querySelector("ul");
    ul.append(li);

    /* when user writes nothing in the form's text
        input, error message (inside a `p` tag)
        - should appear below the form
    */
    if (userInput === ""){
        // make field blank
        event.target["todo-field"].value = "";
        // adds error paragraph message below form
        let errorParagraph = document.createElement("p");
        errorParagraph.textContent = "Error. Todo cannot be empty"
        userForm.after(errorParagraph);
   }
})