let userInput = document.querySelector("#user-form");


userInput.addEventListener("submit", (event)=>{
    event.preventDefault()
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let todo = event.target["user-input"].value;
    li.textContent = todo
    ul.append(li)
    event.target["user-input"].value = "";
    
    li.addEventListener("click", (event)=>{
        if(event.target.style.textDecoration === "line-through"){
            event.target.style.textDecoration = ""
        }
        else{
           let line = event.target.style.textDecoration = "line-through"
           
       }
    })
})




