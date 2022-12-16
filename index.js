const text = document.querySelector("#text");
const submit = document.querySelector("#submit");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop submit from reseting page

    p.innerText = ""; // resest p to be empty after submiting

    const li = document.createElement("li"); // create li
    li.textContent = event.target.text.value; // 
    ul.append(li);

    const deleteBtn = document.createElement("button"); // creates button 
    li.append(deleteBtn); // places button in li
    deleteBtn.innerText = "delete"; // gives button visual text

    if (!text.value) { // checks if 
        p.innerText = "Error To Do Can Not Be Empty!";
        li.remove();
    }

    text.value = "";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    })

    li.addEventListener("click", () => {
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration = "none"
        } else {
            li.style.textDecoration = "line-through"
        }
    })
})

