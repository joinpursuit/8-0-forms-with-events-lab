const input = document.querySelector("input[type='text']");

input.addEventListener("submit", (event) => {
    event.preventDefault();

    const theLi = document.createElement("li")
    theLi.textContent = input.value
    document.querySelector("ul").append(myList);

    const toDo = document.querySelectorAll("ul li")

    for (let li of toDo) {
        theLi.addEventListener("click", () => {
            theLi.style.textDecoration = "line-through solid";
        })
    }

    input.reset();
})