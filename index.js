let userInput = document.querySelector("#user-form");

userInput.addEventListener("submit", (event) => {
  event.preventDefault();
    // target and set user input value to user entry
  let userEntry = event.target["user-input"].value;
    // creates guard clause error message at end of the form
  if (userEntry === "") {
    let error = document.createElement("p");
    error.textContent = "Error, you must enter something in the text field!";

    let body = document.querySelector("body");
    body.append(error);
    
  } else {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    li.textContent = userEntry;
    // strike through when list item is clicked
    li.addEventListener("click", (event) => {
      li.style.textDecoration = "line-through";
    });
    // undo strike through on double click
    li.addEventListener("dblclick", (event) => {
        li.style.textDecoration = "none"
    })
    ul.append(li);
  }
  // clears the input after adding new to do
  event.target["user-input"].value = "";
});

// console.log("Code your solution!")
