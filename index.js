// creating a form variable 
let form = document.querySelector("#form");

//form submit EventListener
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    // creating a variable for ul
    let ul = document.querySelector("ul");
    // created a li;
    let li = document.createElement("li");

    li.style.fontSize = 30;

    let inputs = event.target["username"].value;

    li.textContent = inputs;
    // appending li to ul
    ul.append(li)
    //empty the form
    event.target["username"].value = "";

//li submit EventListener
    li.addEventListener("click", ()=>{
        // event.stopPropagation();
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration === "none"
        }
        else{
          li.style.textDecoration = "line-through"
       }
    })
})