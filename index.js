const body = document.querySelector("body");
const heading = document.querySelector("h1");
heading.innerHTML = "Todos";
const hr = document.createElement("hr");
document.body.appendChild(hr);
const paragraph = document.createElement("p");
    paragraph.style.display="none";
    paragraph.textContent = "Error! Todo cannot be empty";
const form = document.createElement("form");
const btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.textContent = "Submit";
    btn.style["margin-left"] = "8px";

const input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    input.setAttribute("value", "Type a todo");

body.append(paragraph);
body.append(form);
form.append(input);
form.append(btn);
body.append(document.createElement("ul")); 

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(input.value.length === 0 && paragraph.style.display === "none"){
        paragraph.style.display = "block";
    } else if (input.value.length > 0) {
        paragraph.style.display = "none";
        let li = document.createElement("li");
        li.textContent = input.value;
        document.querySelector("ul").appendChild(li);
    }
})


// const ul = document.createElement("ul");



// document.body.appendChild(paragraph);

// document.body.appendChild(form);
// form.append(paragraph);
// form.append(btn);
// document.body.appendChild(ul);

// const x = document.getElementById("myForm")

// form.setAttribute("id", "myForm");
// document.body.appendChild(form);
// const y = document.createElement("input");
// y.setAttribute("type", "text");
// y.setAttribute("value", "Type a todo");
// document.getElementById("myForm").appendChild(y);

// input.setAttribute("type", "submit");
// document.body.appendChild(input);

// input.setAttribute("type", "text");
// input.setAttribute("")
// const t = document.createTextNode("Submit");
// btn.appendChild(t);
// document.body.appendChild(btn);

