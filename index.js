// Create variable ul to grab the "ul" to 
const ul = document.querySelector("ul");
const p = document.querySelector("p")

// create a variable to grab the user input from the form text and add it 
//create event listener
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = event.target.text.value
    // create a variable "li" to append the ul element 
     const li = document.createElement("li");
     li.textContent = text;
     ul.append(li)

    if (!text) {
        p.innerText = "Error! To Do cannot be empty"
        ul.remove(li)    
        form.text.addEventListener("focus", () => {
            p.textContent = " "
        })
    } else {

    // does a strikeout on text in li
const allBullets = document.querySelectorAll("li")

allBullets.forEach((element) => {
    element.addEventListener('click', () => {
        element.style.textDecoration = "line-through"
    })
})
    }
});

function errorMessage() {
   
}

