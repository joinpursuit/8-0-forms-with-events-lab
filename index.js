// console.log("Code your solution!")


function addLi(){
let index = document.getElementById('todo-list').value, // gets the user inputted text 
    indexList= document.getElementById('newList'), // references the ul list with id = 'newList'
    indexLi = document.createElement('LI'), // creates a new li element 
    text = document.createTextNode(index) 

    indexLi.appendChild(text);
    indexList.appendChild(indexLi)  // adds text node to the end of the list

    indexLi.addEventListener( 'click', (event)=>{
        event.target.style.textDecoration = 'line-through'
    })
}

// const form = document.querySelector("#form");
// const ul = document.querySelector("ul");
// const item = document.querySelector("#add-item");

// function addLi(){
//     const newLi = document.createElement("li");
//   newLi.textContent = item.value;
//   ul.append(newLi); 
//   indexLi.addEventListener( 'click', (event)=>{
//     event.target.style.textDecoration = 'line-through'
// })
// }
// form.addEventListener('submit' , addLi)