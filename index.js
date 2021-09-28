console.log("Code your solution!")
let userForm = document.querySelector("#inputForm");
let unorderedList = document.querySelector("ul");
let listItems = document.createElement("li");
let strikeThrough = document.querySelector("li");//not sure if I have to select after creating listItems

userForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    listItems.textContent = event.target["addList"].value// adds only 1 list item does not reset 
    unorderedList.append(listItems);
});

// strikeThrough.addEventListener("click", (event)=>{// attempting line through clicked li
//     event.target["text-decoration"]= line-through solid rgb(0, 0, 0);
// })