const input = document.querySelector("input[type='text']");
const form = document.querySelector("form")

input.addEventListener("submit", (event) => {
    event.preventDefault();

    //document.querySelector(input.value);

    const li = document.createElement("li")
    li.textContent = input.value
    document.querySelector("ul").append(li);

    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });

    //const theDo = document.querySelectorAll("ul li")

    // theDo.forEach((li) => {
    //     theDo.addEventListener("click", () => {
    //         theDo.style.textDecoration = "line-through solid";
    //     })
    // })

    // for (let li of theDo) {
    //     theDo.addEventListener("click", () => {
    //         theDo.style.textDecoration = "line-through solid";
    //     })
    // }
     form.reset();

})

