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

    // make input field blank after each input is submitted
    event.target["todo-field"].value = "";

    /* when user writes nothing in the form's text input, error message (inside a `p` tag) */
    if (!userInput){
        let errorParagraph = document.createElement("p");
        errorParagraph.textContent = "Error. Todo cannot be empty"
        // Error message should appear below the form
        userForm.after(errorParagraph);
   }

    /* when the user clicks on one of the `li` items, the item should be crossed out, indicating that the to-do is complete. */
    let listItems = document.querySelector("ul li");
    console.log(listItems);

    /* add event listener to all `li` elements. The `li` elements have yet to be created. Only affect the `li` that was clicked on */
    listItems.addEventListener("click", ()=>{
        listItems.style.textDecoration = "line-through";
    })
})