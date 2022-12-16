const text = document.querySelector("#text");
const submit = document.querySelector("#submit");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    p.innerText = ""; 

    const li = document.createElement("li"); 
    li.textContent = event.target.text.value;  
    ul.append(li);


    const deleteBtn = document.createElement("button"); 
    li.append(deleteBtn); 
    deleteBtn.innerText = "delete"; 

    if (!text.value) { 
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

