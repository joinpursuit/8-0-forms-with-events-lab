// const form = document.querySelector('form');

// function createList(todo){
//     const li = document.createElement('li');
//     li.textContent = todo;
//     li.append(document.createElement('br'))
//     return li;
// }

// function generateList(todo){
//     const li = createList(todo);
//     const ul = document.querySelector('ul');
//     ul.append(li);
// }

// const p = document.querySelector('p');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if(!todo.value){
//         p.textContent = "Error! Todo cannot be empty";
//         form.append(p);
//     }else{
//         generateList(todo.value);
//     }
//     // li.addEventListener("click", (e) => {
//     //     li.setAttribute("style", "text-decoration: line-through")
//     // })

//     form.reset();
// })


const form = document.querySelector("form");
const list = document.querySelector("ul");
const p = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();// stop the form from refreshing or doing its default.
  //if statement to check if the user entered a value
  if (!e.target.todo.value) {
    //if no entry, print this error message
    p.textContent = "Error! Todo cannot be empty";
  } else {
      //otherwise create list item and add list item to the list
    let item = document.createElement("li");
    item.textContent = e.target.todo.value;
    list.append(item);
    //create line through when text is clicked 
    item.addEventListener("click", (e) => {
      item.setAttribute("style", "text-decoration: line-through");
    });
    //if statement to delete the error 
    if (p.textContent.length > 1) {
      p.textContent = "";
    }
  }
    
  form.reset(); // reset the input section after the use enters a value.
});