// console.log("Code your solution!")
let ul = document.createElement("ul");
let form = document.querySelector("form");
form.append(ul);

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let userInput = event.target["textarea"].value; 
    if(!userInput) {
        let message = document.createElement("p");
        message.textContent = "User input cannot be empty! Please try again!";
        ul.after(message);
    } else {
        let list = document.createElement("li");
        list.textContent = userInput;
        ul.append(list);

        list.addEventListener("click", (e)=> {
            e.target.style.textDecoration = "line-through";
        })
    }
})