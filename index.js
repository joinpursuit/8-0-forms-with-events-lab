//console.log("Code your solution!")
//document.forms.submit 



const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    event.preventDefault(); //forgot this
    console.log("You pressed the button")  //did this happen?
    if(event.target.todo.value === ""){
        const p = document.createElement("p");
        p.innerText="Nice try, but you need to do something"
        form.after(p)
    } else if (event.target.todo.value === "something"){
        const p = document.createElement("p");
        p.innerText="Very funny. Try again."
        hr = document.querySelector("HR")
        hr.prepend(p)
    } else {
    const li = document.createElement("li")  //create a variable that allows you to create a list item
     li.textContent =  event.target.todo.value;  //create a list item and put the information submitted into the new <li>
     
     const ul = document.querySelector("ul"); //but why should i need to do this if I already have a ul? Because that is what I am doing here: Selecting the ul, not creating it. It is just a short hand way to talk about it. Otherwise, I would be writing document.querySelector("ul").append(li)
     ul.append(li); //put the new <li> into the list
     console.log("The li is:" , li)
    }
    })

// if any of the list items are clicked, they should be crossed out

const didSomething = document.querySelector("li");

didSomething.addEventListener("click",(e)=>{
    const crossOff = document.querySelector("li");
    crossOff.style.textDecoration="line-through"
    });
 


// function addTodo(button){
//     let addThis = document.todoForm.display.value
//     const li = document.createElement("li")
//     "put an LI tag here."
//     console.log("You pressed the button")
// }

// function createList(){}


/*
Things to do:
    Our app will have the following items:

(x) An h1 title (e.g. "My To-Dos").
(x) A single ul tag, empty when the page is first loaded.
(x) A form for the user to add a new to-do, with a single text input and a submit button.

And the following functionalities:

(x) When the user writes something in the form's text input area and clicks submit, the ul should update with a new li item at the bottom of the list. The page should not refresh.

Hints/Steps
(x) When the user writes nothing in the form's text input area and clicks submit, an error message (inside a p tag) should appear below the form.

Hints/Steps
When the user clicks on one of the li items, the item should be crossed out, indicating that that to-do is complete. You will need to look at [element].style.textDecoration for the cross out effect. Look at all the different text decoration options.

Hints/Steps
Sample


*/