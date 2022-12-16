/* Code Explanation:
line 15: Create a new list element.
line 16: Assign the input value from todo submit to the list text content.
line 17: Add the new list to the last of the list.
line 19: I had write nested "addEventListener" so it can create a new list every time,
    And every time it clicked on the list, it would put a line-through that list.
*/

const form = document.querySelector("form");
const unordered = document.querySelector("ul");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newList = document.createElement("li");
    newList.textContent = event.target.todo.value;
    unordered.append(newList);

    newList.addEventListener("click", (event) => {
        event.preventDefault();

        newList.style.textDecoration = "line-through";
    })
});




