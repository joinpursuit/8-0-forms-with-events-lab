console.log("Code your solution!")
// let titleChange = document.querySelector("h1");
// titleChange.innerText = "My To-Dos";
// let myBody = document.querySelector("body");
// let createUL = document.createElement("ul");
// myBody.append(createUL);
// let createForm = document.createElement("form");

/*
Note:  Would not pass Cypress test, as Cypress looks specifically in html
for <button type = "submit">Button Text</button>.  I had <input
*/
let button1 = document.querySelector("form");
button1.addEventListener("submit", (event) => {
    event.preventDefault();
    let listUL = document.querySelector("ul");
    let addLI = document.createElement("li");
    if (event.target.newToDoInput.value === "") {
        let formCont = document.querySelector("form");
        let addPDS = document.querySelector("p");
        if (!addPDS) {
            let addP = document.createElement("p");
            addP.textContent = "Please enter a non-null text value.";
            formCont.after(addP);
        }
    } else {
        addLI.addEventListener("click", (event) => {
            event.target.style.textDecoration = "line-through"
        });
        addLI.textContent = event.target.newToDoInput.value;
        listUL.append(addLI);
        event.target.newToDoInput.value = "";
        }
});