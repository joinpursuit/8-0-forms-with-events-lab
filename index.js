const form = document.querySelector('form');

function createList(todo){
const li = document.createElement('li');
li.textContent = todo;
li.append(document.createElement('br'))
return li;
}

function generateList(todo){
const li = createList(todo);
const ul = document.querySelector('ul');
ul.append(li);
}

const p = document.querySelector('p');

form.addEventListener('submit', (event) => {
event.preventDefault();

if(!event.target.todo.value){
    p.textContent = "Error! Todo cannot be empty";
    form.append(p);
}else{
    p.textContent = "";
    generateList(event.target.todo.value);
}

form.reset();
})

const ul = document.querySelector('ul')

ul.addEventListener("click", (event) => {
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration = "none";
    }else{
        event.target.style.textDecoration = "line-through";
    }
})

// form.addEventListener('submit', (event) => {
//         event.preventDefault()
//         const li = document.createElement('li')
//         li.textContent = event.target.todo.value;
//         ul.append(li);
    
//     li.addEventListener("click", (event) => {
//        li.style.textDecoration = "line-through"
//     });
    
//         form.reset();
//     });
    