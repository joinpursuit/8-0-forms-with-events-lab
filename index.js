console.log("Code your solution!");
// Our app will have the following items:

// - An `h1` title (e.g. "My To-Dos").
const h1 = document.querySelector("h1");
h1.innerText = "My To-Dos";

// - A single `ul` tag, empty when the page is first loaded.
const ul = document.createElement("ul");
// - A `form` for the user to add a new to-do, with a single text `input` and a `submit` button.
const form = document.createElement("form");
const textBox = document.createElement("textarea");
//textBox.setAttribute("type", "text");
const button = document.createElement("input");
button.setAttribute("type", "submit");
button.textContent = "Submit";

const body = document.querySelector("body");
body.append(form);
form.append(textBox, button);
body.append(ul);
// And the following functionalities:

// - When the user writes something in the `form`'s text input area and clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. The page **should not refresh**.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("In Event");
  //const li = document.createElement("li");
  // const br = document.createElement("br");
  const toDoList = () => {
    //console.log("Inside TODOLIST");
    if (textBox.value.includes(`\n`)) {
      textBox.value.split("\n").forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        console.log("Before list setup", li);
        liSetUp(li);
        ul.append(li);
      });
    } else {
      const li = document.createElement("li");
      // console.log(textBox.value);
      li.textContent += `${textBox.value}`;
      console.log("Before list setup", li);
      liSetUp(li);
      ul.append(li);
    }
  };

  const liSetUp = (li) => {
    li.addEventListener("click", (event) => {
      //console.log(event.target);
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    const button1 = document.createElement("button");
    button1.setAttribute("type", "click");
    button1.textContent = "Delete";
    li.append(button1);
    button1.addEventListener("click", (event) => {
      //console.log(event.target);
      //ul.removeChild(li, button1);
      li.remove();
    });
  };
  toDoList();
  form.reset();
});
