const form = document.querySelector("form");
const list = document.querySelector("ul");
// const area = document.querySelector("area");
// const multi = document.createElement("#textarea");
// form.append(multi);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const listArr = event.target.multi.value.split("\n");
    for (let i=0;i<listArr.length;i++) {
        const newTask = document.createElement("li");
        newTask.innerText = listArr[i];
        list.append(newTask);
        const delBut = document.createElement("button");
        delBut.textContent = "Delete"; 
        newTask.append(delBut);
        delBut.addEventListener("click",(event) => {
            event.preventDefault();
            newTask.remove();
        })
        
        newTask.addEventListener("click",() => {
            newTask.style.textDecoration = "line-through";
            if (newTask.style.textDecoration === "line-through") {
                newTask.addEventListener("click",() => {
                    newTask.style.textDecoration = "none";
                })
            }
        })
        
    }
    // newTask.innerText = event.target.multi.value;
    form.reset();
    
} )

