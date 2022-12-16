// grab the 'form' element from the DOM and store it inside a variable
const formElement = document.querySelector("form");

// add an 'eventListener' for the 'submit' event
formElement.addEventListener("submit", (event) => {

    // demo is not for code review /

    // prevent the default 'action' of the 'form' element
    event.preventDefault();
    console.log(event)
    // create an 'li' element 
    let listElement = document.createElement("li");

    // get the 'value' of the element with 'textInput' id and assign it to a variable
    // Method #1
    //const textInputValue = document.querySelector("#textInput").value;

    // Method #2 - is that input supposed to be in the event.
    const textInputValue2 = event.target.textInput.value;

    // assign the 'text-content' of the list element to that of the 'value' from the 'text-input'
    listElement.textContent = textInputValue;

    // add an eventListener of type 'click' when the 'list' element is clicked by the user.
    listElement.addEventListener("click", (event) => {

        // prevent the 'default' action for the 'li' element
        event.preventDefault();

        // add 'text-decoration' to the 'clicked' list element
        listElement.style.textDecoration = "line-through";

    });

    // access the 'ul' element with a querySelector and store it inside a variable
    const unorderedListElement = document.querySelector("ul");

    // append the modified 'li' element to the 'ul' element
    unorderedListElement.append(listElement);

    event.target.textInput.value = '';

});

