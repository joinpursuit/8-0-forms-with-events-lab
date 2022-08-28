console.log("Code your solution!")

const input = document.querySelector("textarea");
const submit = document.querySelector("button[type='submit");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const body = document.querySelector("body");

submit.addEventListener("click", (event) => {
    event.preventDefault(); // try putting this into the else statement

    if(input.value === ""){
        const paragraph = document.createElement("p");
        paragraph.textContent = "Error: Todo cannot be empty";
        form.after(paragraph);
    }

    else if (input.value.length > 0) {
        let value = input.value.split("\n");
        value.forEach( todo => {

            if(todo === ""){
                let index = value.indexOf(todo);
                value.slice(index);
            }
            else {
                const li = document.createElement("li");
                li.textContent = todo;
                ul.append(li);
                const list = document.querySelectorAll("li");
                li.addEventListener("click", () => {
                    if(li.style.textDecoration === "line-through"){
                        li.style.textDecoration = "none";
                    }
                    else {
                        li.style.textDecoration = "line-through";
                    }
                })
                
                const button = document.createElement("button");
                button.textContent = "Delete";
                button.addEventListener("click", () => {
                    li.remove();
                    })
                li.append(button);
                
                const paragraph = document.querySelectorAll("p")
                for(let p of paragraph){
                    body.removeChild(p);
                    }
                
                input.value = "";
            }
        
        })
    }
})


const list = document.querySelectorAll("li");
for(let li of list){
    
}

