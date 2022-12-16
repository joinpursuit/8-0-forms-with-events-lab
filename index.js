const ul = document.createElement("ul");

const form = document.querySelector("form");
form.prepend(ul)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = todo.value;
    if (!value) {
        const p = document.createElement("p");
        p.textContent = "Error";
        ul.prepend(p)
    } else {
        const li = document.createElement("li");
        li.textContent = value;
        ul.append(li);
        li.addEventListener("click", (event) => {
            if (event.target.style.textDecoration === "line-through") {
                event.target.style.textDecoration = "blank"
            } else {
                event.target.style.textDecoration = "line-through"
            }
        })
    }
})