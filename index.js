// console.log("Code your solution!")

let newForm = document.querySelector("form");
let newList = document.querySelector("ul");

newForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let addToDoText = e.target["to-do"].value;
if(!addToDoText){
    let para = document.createElement("p");
    newForm.after(para);
    para.textContent = "Error. Todo cannot be empty"
}else{
    let list = document.createElement("li");
    list.textContent = addToDoText;
    newList.append(list);
    list.addEventListener("click", (e)=>{
        e.target.style.textDecoration = "line-through"
    });
}

});