console.log("Code your solution!")
let myForm=document.querySelector("#form-id");
myForm.addEventListener("submit", e=> {
    e.preventDefault();
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    if(e.target.todoslists.value) {
        li.textContent=e.target.todoslists.value;
        e.target.todoslists.value="";
        ul.append(li);
        li.addEventListener("click", e=>{
            e.target.style.textDecoration="line-through";
        })
    }else {
        let p=document.createElement("p");
        p.textContent="Error:text should not be empty! ";
        myForm.after(p);
    }
})
