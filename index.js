console.log("Code your solution!")
// // An `h1` title (e.g. "My To-Dos").
// const body = document.querySelector("body");
// const h1 = document.querySelector("h1");
// h1.textContent = "My To-Do's";
// // A single `ul` tag, empty when the page is first loaded.
// const ul = document.createElement("ul");
// // A `form` for the user to add a new to-do, with a single text `input` 
//     const form = document.createElement("form");
//     body.append(form);
//     const textInput = document.createElement("input");
//     form.append(input)
//     textInput.setAttribute("type" , "text");
//     const getButton = document.createElement("button");
//     getButton.setAttribute("type", "submit");

// and a `submit` button.
const ul = document.querySelector('ul')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const li = document.createElement('li')
    li.textContent = event.target.todo.value;
    ul.append(li);

    li.addEventListener("click", (event) => {
       li.style.textDecoration = "line-through"
    });

    form.reset();
});