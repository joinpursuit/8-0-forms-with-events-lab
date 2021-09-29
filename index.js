// selecting the "body" tag in HTML
let body = document.querySelector("body");
// creating the "form" tag 
let form = document.createElement("form");
// setting arttribute "id = user-form" to "form" tag
form.setAttribute("id", "user-form");
// "appending" "form" tag as a child to "body" tag
body.append(form);

// selecting the "h1" tag in HTML
let heading = document.querySelector("h1");
// re-naming the text description in "h1" tag in HTML
heading.textContent = "To-Dos";

// creating the "hr" line tag under the "h1" tag 
let hr = document.createElement("hr");
// adding the "hr" line tag "before" the "form" tag 
form.before(hr);

// creating the "ul" tag 
let ul = document.createElement("ul");
// "appending" "ul" tag as a child to "body" tag
body.append(ul);

// creating the "label" tag 
let label = document.createElement("label");
// setting arttribute "for = To-Dos" to "label" tag
label.setAttribute("for", "To-Dos");
// "appending" "ul" tag as a child to "body" tag
form.append(label);


let input = document.createElement("input");
input.setAttribute("id", "To-Dos");
input.setAttribute("name", "To-Dos");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type a To-Do's")
form.append(input);

let button = document.createElement("button");
button.setAttribute("type", "submit")
button.textContent = "Submit"
form.append(button);

let userForm = document.querySelector("#user-form");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let body = document.querySelector("body");

    let userInput = e.target["To-Dos"].value;
    let div = document.createElement("div");
    div.textContent = userInput;
    body.append(div);

    e.target["To-Dos"].value = "";

});



