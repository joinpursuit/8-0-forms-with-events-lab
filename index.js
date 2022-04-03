const userform = document.querySelector("#user-form")
userform.addEventListener("submit", (event) =>{
    event.preventDefault();
    const userinput = event.target["Todo-field"].value;

    const li= document.createElement("li");
    li.textContent = userinput;
    
    const ul = document.querySelector("ul");
    ul.append(li);
li.addEventListener("click",(event) => {
    li.style.textDecoration="line-through";
})
});