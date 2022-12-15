// console.log("Code your solution!")
let formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let lists = document.createElement('li');
    let textEntered = document.querySelector("#text").value;
    lists.textContent = textEntered;
    lists.addEventListener("click", (event) => {
        event.preventDefault();
        lists.style.textDecoration = "line-through";
    })
    let unorderList = document.querySelector("ul");
    unorderList.append(lists);
});
