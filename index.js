const form = document.querySelector("form");
const ul = document.querySelector("ul");

let submitButton = document.querySelector("button");

//create a delete button (apparently)
let deleteButton = document.createElement("button");
deleteButton.innerText = "DELETE";
deleteButton.id="destroy";
deleteButton.type="button";
deleteButton.style.backgroundColor = "rgb(255,14,71)"





form.addEventListener("submit", (e) => {
    e.preventDefault(); //forgot this
    
    //create a variable that allows you to create a list item. This has to be inside of the function or it won't add to the list, but just keep replacing the first item. 
    const li = document.createElement("li")  
    console.log("You pressed the button")  //did this happen?
    li.textDecoration = "none"
    if(e.target.todo.value === ""){
        const p = document.createElement("p");
        p.innerText="Nice try, but you need to do something"
        form.after(p)
    } else if (e.target.todo.value === "something"){
        const p = document.createElement("p");
        p.innerText="Very funny. Try again."
        hr = document.querySelector("HR")
        hr.prepend(p)
     
    } else {
     li.textContent =  e.target.todo.value;  //create a list item and put the information submitted into the new <li>
    
     li.classList = "todo"  //in case I need a class later
     li.append("    ", deleteButton);
     
ul.append(li); //put the new <li> into the list
     console.log("The li is:" , li);
    

         //clear the input when a todo is added –BONUS
        blank = document.getElementById("todo")
        blank.value = ""
    }

    //strike through an item when clicked. 
    //some kind of toggle is needed.



    li.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clicked")
        li.style.textDecoration = "line-through";
   
    })
  

        //delete button needed?
    const erase = document.getElementById("destroy")
    erase.addEventListener("click",(e)=> {
        e.innerText=""
    }
    )

        //multiple lines
    }

)


/*
Well this didn't work
    if (li.style.textDecoration="none"){
        li.style.textDecoration = "line-through";
        } else if (li.style.textDecoration = "line-through") {
            li.style.textDecoration="none"

also didn't use      

     const tgt=e.tgt.closest("li");
        if (tgt) tgt.classlist.toggle("strikeout");

    function strikeout(li){
        let item=document.getElementById("ul");if (item){item.className=(item.className=="hidden")?"unhidden" :"hidden";}

     */ 


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
(x) When the user clicks on one of the li items, the item should be crossed out, indicating that that to-do is complete. You will need to look at [element].style.textDecoration for the cross out effect. Look at all the different text decoration options.
*/