let userInput = document.querySelector("#user-form");
    userInput.addEventListener("submit", (event)=>{
        event.preventDefault()
            const ul = document.querySelector("ul");
            const li = document.createElement("li");
            const list = event.target["user-input"].value;
                li.textContent = list
                ul.append(li)
                event.target["user-input"].value = "";

        li.addEventListener("click", (event)=>{
            if(event.target.style.textDecoration === "line-through"){
                event.target.style.textDecoration = ""
            }
            else{
            event.target.style.textDecoration = "line-through"
        }
        })
    })

