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

        // creating delete button
        let delButton=document.createElement("button");
        delButton.setAttribute("type", "submit");
        delButton.setAttribute("name", "submit");
        delButton.textContent="Delete";
        li.after(delButton);
        
        // function to switch between none and line through.
        function textDecorationOrNone(changer){
        
            if(changer===1) {
                li.addEventListener("click", e=>{
                    e.target.style.textDecoration="none"; 
                    changer=0;
                    return textDecorationOrNone(changer);
                });
            }else {
                li.addEventListener("click", e=>{
                    e.target.style.textDecoration="line-through"; 
                    changer=1;
                    return textDecorationOrNone(changer);
                });
            }   
        }

        textDecorationOrNone();
        li.addEventListener("dlclick", (e2Inv)=> {
            e2Inv.target.style.textDecoration="none";

        })
        delButton.addEventListener("click", ()=> {
            li.remove();
            delButton.remove();
        })
        // error
    }else {
        let p=document.createElement("p");
        p.textContent="Error:text should not be empty! ";
        myForm.after(p);
    }
})
