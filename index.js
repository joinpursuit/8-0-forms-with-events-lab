
const form = document.querySelector("form");
const ul = document.querySelector("ul");


//what event do we want to listen for?
const button = document.querySelector("button")
form.addEventListener("submit", (event) => {
    //text input we will grab
    const txt = document.querySelector("input[type='text']");

    // console.log(txt.value)
    event.preventDefault();
    const li = document.createElement("li")
    li.classList.add('added')
    li.textContent = txt.value;

    form.reset();

    ul.append(li);
})
ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("added")) {
        event.target.style.textDecoration = "line-through"
    }
})

