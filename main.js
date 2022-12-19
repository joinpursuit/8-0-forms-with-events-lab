
const ul = document.querySelector("ul")


const addToDO = ((text) => {
    if (text) {
        const li = document.createElement("li");

        ul.append(li);
        li.append(text)
        
    }
}) 


const form = document.querySelector("form")
const li = document.querySelector("li")
const textContent = document.querySelector("#textContent")
form.addEventListener("click", (event)=> {
event.preventDefault()
const text = event.target.form.textContent.value;

addToDO(text)
form.reset()
})


//Wrote the below fucntion for event the line-through. However at thie state it is currently written it doesn

// const crossout = ((text) => {
//      li = document.querySelector("li")
    
// })

// form.addEventListener("click" ,(event)=> {
//     event.target.form.li.textContent = text-decoration.line-through;
// } )

// Struggling to find a solution for the event line through text decoration after the li is clicked. 
//Attempted to write it under style in HTML and did not work. 
//Created a CSS file in an effort to link it to the HTML. 
//Another issue I had was getting the proper syntax for the code for the evemt to take place. 
//Example is it 
//(event.target.form.text-decoration.value = event.target.line-through.value) are we able to include the hyphens in the property name(text-decoration)and the value (line-through)?