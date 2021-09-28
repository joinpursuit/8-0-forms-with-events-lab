
const form = document.querySelector("#todo");
form.addEventListener("submit", (event) => {
event.preventDefault();
const li = document.createElement('li');
li.textContent = event.target.input.value; 
const ul = document.querySelector('ul');
ul.append(li);
// event.target.remove();
})

document.querySelector("ul").addEventListener("click", (event) => {
event.preventDefault();
event.target.style["text-decoration"] = "line-through";
});


    

