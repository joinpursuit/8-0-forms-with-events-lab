// console.log("Code your solution!")
const form= document.querySelector("form");

const ul= document.querySelector("ul");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let lis= document.querySelectorAll("li");

    const li = document.createElement("li");

    li.textContent = event.target.todo.value;

    li.classList.add("list");
    
    ul.append(li);

    li.add.EventListener("clcik", () => {
        li.style.textDecoration = "line-through";
    })

    // ul.addEventListener("click", event => {
    //     if(event.target.classList.contains("list")) {
    //         event.target.style.textDecoration = "line-through"
    //     }
    // })
});
