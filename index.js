console.log("Code your solution!")

const input = document.querySelector("#to-do");
const count = document.querySelector("#count");
const characterLimit = input.maxLength;
count.textContent = characterLimit;

input.addEventListener("keydown", (event) => {
  const length = input.value.length;
  count.textContent = characterLimit - length;
});

//--------form start---------

//Query form and start by reset error message if any
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear error message upon event
  count.textContent = characterLimit;
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }

  //Then add input to the list if there is any

  // NOTE: The \n is invisible in the console; what's shown in the console is not in strings
  //   if (input.value.includes("\n")) {
  //     console.log(true);
  //   }

  if (input.value) {
    const ul = document.querySelector("ul");

    //Add multiple lines if any
    if (input.value.includes("\n")) {
      const lines = input.value.split("\n");
      for (let line of lines) {
        let li = document.createElement("li");
        li.textContent = line;

        // Add delete button to each list item
        const button = document.createElement("button");
        button.classList = "trash";
        button.type = "button";
        button.textContent = "🗑";
        button.style.backgroundColor = "white";

        //Update DOM
        li.prepend(button);
        ul.append(li);

        //Add event to target and TOGGLE cross out text decoration
        li.addEventListener("click", (event) => {
          if (!event.target.style.textDecoration.includes("line-through")) {
            event.target.style.textDecoration = "line-through solid black";
          } else {
            event.target.style.textDecoration = "none solid rgb(0, 0, 0)";
          }
          // OR TOGGLE style text via CSS classList /JS
          //   event.target.classList.toggle("cross-text");
        });

        //Remove list upon event
        button.addEventListener("click", (event) => {
          event.target.parentElement.remove();
        });

        // Clear & start over upon event
        event.target.reset();
      }
    } else {
      //Or Add single lines of input if any
      li = document.createElement("li");
      li.textContent = input.value;

      //Add delete button to each list item
      const button = document.createElement("button");
      button.classList = "trash";
      button.type = "button";
      button.textContent = "🗑";
      button.style.backgroundColor = "white";

      // Update DOM
      li.prepend(button);
      ul.append(li);

      //Add event to target and TOGGLE cross out text decoration
      li.addEventListener("click", (event) => {
        if (!event.target.style.textDecoration.includes("line-through")) {
          event.target.style.textDecoration = "line-through solid black";
        } else {
          event.target.style.textDecoration = "none solid rgb(0, 0, 0)";
        }
        // OR TOGGLE style text via CSS classList /JS
        //   event.target.classList.toggle("cross-text");
      });

      //Remove list upon event
      button.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });

      // Clear & start over upon event
      event.target.reset();
    }
  } else {
    //If no input, then display error message
    if (!document.querySelector("p")) {
      const error = document.createElement("p");
      error.textContent = "Try again! There's nothing to add.";
      // Update DOM
      form.append(error);
      // Clear & start over upon event
      event.target.reset();
    }
  }
});
