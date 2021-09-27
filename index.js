//console.log("Code your solution!")
let createUL = document.createElement("ul");
let selectForm = document.querySelector("form");
selectForm.after(createUL);

selectForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    let task = e.target.todo.value;
    if(!task) {
        let p = document.createElement("p");
        selectForm.after(p);
        p.textContent = "Task Cannot Be Empty!!!";
    } else {
        let alist = document.createElement("li");
        alist.textContent = task;
        createUL.append(alist);

        alist.addEventListener("click", (l)=> {
            if(l.target.style.textDecoration !== "line-through") {
                l.target.style.textDecoration = "line-through";
            } else {
                l.target.style.textDecoration = "none";
            }
        })
    }
})