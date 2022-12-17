const text = document.querySelector("#text");
const submit = document.querySelector("#submit");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    p.innerText = ""; 

    const li = document.createElement("li"); 
    if(text.value.includes("\n")){
        let multiLine = text.value.split("\n")
        const li2 = document.createElement("li"); 
        li.textContent = multiLine[1]
        li2.textContent = multiLine[0]
        ul.append(li2)
        ul.append(li)

        const deleteBtn2 = document.createElement("button"); 
        li2.append(deleteBtn2); 
        deleteBtn2.innerText = "delete"; 

        deleteBtn2.addEventListener("click", () => {
            li2.remove();
        })

        li2.addEventListener("click", () => {
            if(li2.style.textDecoration === "line-through"){
                li2.style.textDecoration = "none"
            } else {
                li2.style.textDecoration = "line-through"
            }
        })

    } else {
        li.textContent = event.target.text.value;
        ul.append(li);
    }


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

