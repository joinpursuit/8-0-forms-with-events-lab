console.log("Code your solution!")


//1. query the form element
const form = document.querySelector("#to-dos")
//2. Add an event listener for submitting the form.
form.addEventListener('submit', (event) => {
    //3. prevent the page from refreshing
    event.preventDefault();


    const list = event.target.list.value;

    addToList(list);
    event.target.reset();

})



//4. get the text that's in each input box

//5. give those values to my function 



function listTemplate (thing) {
    const li = document.createElement('li');
    li.textContent += thing;
    return li
}

function addToList (thing) {
    const li = listTemplate(thing);
    const ul = document.querySelector("ul");
    ul.append(li)
    
    if (!thing) {
        const msg = document.createElement("p");
        msg.textContent = "Please enter something";
        form.after(msg);
        console.log(msg);
    }

    const list = document.querySelectorAll("li");
    list.forEach((item) => {
        item.addEventListener("click", () => {
        item.style.textDecoration = "line-through solid rgb(0,0,0)"
        })
    })
    list.forEach((item) => {
        item.addEventListener("dblclick", () => {
        item.style.textDecoration = "none"
        })
    })
        
    }
