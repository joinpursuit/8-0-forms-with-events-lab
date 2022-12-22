// console.log("Code your solution!")

const form = document.querySelector("form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const p = document.querySelector("p");
    const ul = document.querySelector("ul");
    const li = document.querySelector("li");
    const entry = event.target.userInput.value;
    if(entry.length === 0){
        p.textContent = "error";
    } else{
        entry.textContent = "";
        li.textContent = entry;
        ul.append(li);
    }
    event.target.reset();
})

const ul = document.querySelector("ul");
ul.addEventListener("click", (event) =>{
    event.preventDefault();
    event.target.style["text-decoration"] = "line-through";
})
