


// console.log("Code your solution!")


//1. query the form element
const form = document.querySelector("#to-dos")
//2. Add an event listener for submitting the form.
form.addEventListener('submit', (event) => {
    //3. prevent the page from refreshing
    event.preventDefault();
    console.log(event);

    const list = event.target.list.value;
    


    addToList(list);

    if (list.includes("\n")) {
        const splitList = list.split("\n");
        const sliceList = splitList.slice(1)
        sliceList.forEach((each) => {
            addToList(each)
        })
     } 


    event.target.reset();

})

//4. get the text that's in each input box

//5. give those values to my function 

function listTemplate (thing) {
// Check if there is no inputted value and return an error message
    if (!thing) {
        const msg = document.createElement("p");
        msg.textContent = "Please enter something";
        form.after(msg);
        return msg
    }

    // Each time something gets typed in, create a <li> tag and add it to the form
    const li = document.createElement('li');
    li.textContent += thing;


    // Each time we create & add a list, implement a delete button next to each li
    
    const createDeleteButton = document.createElement("button");
    createDeleteButton.addEventListener("click", () => {
        li.parentNode.removeChild(li);
      });
    
    li.append(createDeleteButton); 


    return li
}

// Add the ability to add multiple to-dos 
// if the user submits a text input with multiple lines. Each line should be a new to-do.



function addToList (thing) {
    

    const li = listTemplate(thing);
    const ul = document.querySelector("ul");

    ul.append(li)
    

    const list = document.querySelectorAll("li");
  
    
    list.forEach((item) => {
        
        item.addEventListener("click", () => {
           item.classList.toggle("cross-out");
        })
    })
//     list.forEach((item) => {
        
//         item.addEventListener("click", () => {
//             if (item.style.textDecoration) {
//                 item.style.textDecoration = "none";
            
//             } else {
//                 item.style.textDecoration = "line-through solid rgb(0,0,0)"
             
//             }
//         })
//     })
// }
 
}








// For Dark-Mode

const createDarkModeButton = document.createElement("button");
createDarkModeButton.textContent = "Dark Mode"
document.body.append(createDarkModeButton);

createDarkModeButton.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
});