/* Code Explanation is on the bottom of the code. */

const form = document.querySelector("form");
const unordered = document.querySelector("ul");
const errorMsg = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!event.target.todo.value) {
        errorMsg.setAttribute("style", "display: inline");
    } else {
        errorMsg.setAttribute("style", "display: none");

        const newList = document.createElement("li");
        newList.textContent = event.target.todo.value;
        unordered.append(newList);
        event.target.todo.value = "";

        newList.addEventListener("click", (event) => {
            event.preventDefault();
    
            if (newList.style.textDecoration !== "line-through") {
                newList.style.textDecoration = "line-through";
            } else {
                newList.style.textDecoration = "";
            }
        })

        const deleteBttn = document.createElement("button");
        deleteBttn.textContent = "Delete";
        newList.append(deleteBttn);

        deleteBttn.addEventListener("click", (event) => {
            event.preventDefault();

            newList.remove();
        })
    }
});

/* Code Explanation:
line 10: If nothing is inputted, show the error message. 
line 12: If something is inputted, hide the error message and proceed. 
line 15: Create a new list element.
line 16: Assign the input value from todo submit to the list text content.
line 17: Add the new list to the last of the list.
line 18: It resets to empty input field after each time the input is submitted.
line 20: I had write the nested "addEventListener" so it can create a new list every time,
    And every time it clicked on the list, it would put a line-through that list.
line 23: If the newList was clicked and it was strikethrough, undo when clicked again.
line 30: Created a new button element that will be added next to the newList,
    and when is clicked, it will remove the newList.
*/