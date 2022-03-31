console.log("Code your solution!")

let input = document.querySelector("input")
let form = document.querySelector("form");
let unorderedList = document.querySelector("ul");


form.addEventListener("submit", (event) => {
    event.preventDefault(); 
//find text
//create new li
//add text to li
//add li to ul
let text = input.value 
let listItem = document.createElement("li");

listItem.innerText = text
unorderedList.append(listItem)

listItem.addEventListener("click", (event) => {
    listItem.style.textDecoration = "line-through"
})
})