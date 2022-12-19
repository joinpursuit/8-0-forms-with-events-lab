const form = document.querySelector("form"); //grab form from the DOM which querySelector is needed
//console.log("Code your solution!")

 form.addEventListener("submit", (event) => 
 {//created a addEventListener with submit and (event)

    event.preventDefault();
    //stops the default such as disappering or overriding

    const list = document.createElement("li"); 
    //created a li using createElement
    
    const  textInput= document.querySelector("#textInput").value;
    //get the value of textInput, grab text input from html doc

    list.textContent = textInput; 
//created a text content variable for textInput 

    list.addEventListener("click", (event) => {
    event.preventDefault();

    list.style.textDecoration = "line-through";
    });
    //creates a line through that crosses out check list once dishes and etc is done

    const elementsForUl = document.querySelector("ul"); 
    elementsForUl.append(list);
 })
