/* select the form (ID)*/


const toDoSubmission = document.querySelector("#user-form")

/* can't use click because it's a form */

function toDo() {

    toDoSubmission.addEventListener("submit", (event) => {

        /* prevent page from reloading */
        event.preventDefault();

        /* Be careful about QUERYSELECTORALL - it won't add the items! */

        const unorderedToDoList = document.querySelector("ul");
        const toDoItems = document.createElement("li");


        /* Use the .value property to access the ID value */

        toDoItems.textContent = event.target["listContents"].value;


        /* add the list items to the list */

        unorderedToDoList.append(toDoItems)



        toDoItems.addEventListener("click", (event) => {
            /* change the text decoration to line through to do a cross off of compeleted items" */
            event.target.style.textDecoration = "line-through";
        });

    });


}



toDo()

