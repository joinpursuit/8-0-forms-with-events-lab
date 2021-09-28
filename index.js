// const trash = document.querySelector(".garbage");
const ul = document.querySelector("ul");
function eatPasta (input) {
    const li = document.createElement("li")
    li.textContent += input;
    ul.append(li);
    const list = document.querySelectorAll("li")
    list.forEach((li) => {
        li.addEventListener("click",() =>
        li.style.textDecoration = "line-through")
    })
    
    list.forEach((li) => {
        li.addEventListener("dblclick",() =>
        li.style.textDecoration = "none solid rgb(0, 0, 0)")
    })
​
    // const garbage = document.createElement("button");
    // garbage.innerHTML = "Trash";
    // ul.appendChild(garbage);
    
    // garbage.addEventListener("click", () => {
    //     list.remove()
    // })
​
    // return li
}
​
​
​
​
const form = document.querySelector("form");
​
​
form.addEventListener("submit", (event) => {
​
event.preventDefault();
​
const getPasta = event.target.box.value;
​
eatPasta(getPasta);
​
event.target.reset();
})
​
