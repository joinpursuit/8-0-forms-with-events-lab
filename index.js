
const formSubmission = document.querySelector("#user-form");

//listen for submit button
formSubmission.addEventListener("submit", (event) =>{
    event.preventDefault();
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = event.target["listContents"].value;
    if(li.textContent === ""){
        const error = document.createElement("p");
        error.textContent = "List item must contain characters."
        formSubmission.append(error);
    }else{
        ul.append(li);
    }
    

    //listen for line through

    li.addEventListener("click", (event) =>{
        event.target.style.textDecoration = "line-through";
    })

})