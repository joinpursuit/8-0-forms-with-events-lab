const form = document.querySelector("#my-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = event.target.list.value;
   if(li.textContent === ""){
        const error = document.createElement("p")
        error.textContent = 'Error. Todo cannot be empty';
        ul.before(error);
    }
     ul.append(li);

     li.addEventListener("click", (event) => {
         event.target.style.textDecoration = "line-through";
     });
});








