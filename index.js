//console.log("Code your solution!")
//Create a variable 'ul' to grabbing the 'ul' element

const ul = document.querySelector("ul");
const p = document.querySelector("p");

//Create an eventListener 
//create a variable 'li' to append to the 'ul' element
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = event.target.text.value
    const li = document.createElement("li");
        li.textContent = text;
        ul.append(li)

    if (!text) {
        p.textContent = "Error.  Todo cannot be empty";
        ul.remove(li);
       


    } else {
        const allLi = document.querySelectorAll("li");
    
        allLi.forEach((element) => {   
            element.addEventListener("click", () => {
            element.style.textDecoration = "line-through"
             })
        }) 
    }   
}) 

 form.text.addEventListener("focus", () => {
        p.textContent = " ";
})




