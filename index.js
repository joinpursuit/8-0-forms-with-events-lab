let form = document.querySelector("#new-text")

let unordered = document.querySelector("ul")

form.addEventListener("submit", (event)=>{
    //stops page from refreshing
    event.preventDefault();

    //create a new list
    let newLi = document.createElement("li");
    newLi.textContent = event.target["name-field"].value

    //IGNORE ~~~ FOR MY OWN UNDERSTANDING
    //adds userInput valuse into "ul" as a list item 
    unordered.append(newLi)
    //selects the form tag 
    console.log("This thing give form", event.target)
    //selects the submit box
    console.log("", event.target["name-field"]) 
    //selects the value of the submit box (.value not .textContent)
    console.log("trigger", event.target["name-field"].value)
    //IGNORE ~~~ FOR MY OWN UNDERSTANDING
})

