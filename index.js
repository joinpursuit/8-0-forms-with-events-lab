let form = document.querySelector("#new-text")

let unordered = document.querySelector("ul")

form.addEventListener("submit", (event)=>{
    //stops page from refreshing
    event.preventDefault();

    //create a new list
    let newLi = document.createElement("li");
    newLi.textContent = event.target["name-field"].value
    unordered.append(newLi)
    
    newLi.addEventListener("click", (event)=>{
        event.target.style.textDecoration = "line-through"
    })
})
