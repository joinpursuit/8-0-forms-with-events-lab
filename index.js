// Character limit countdown
const input = document.querySelector("#to-do");
const count = document.querySelector("#count");
const characterLimit = input.maxLength;
count.textContent = characterLimit;

input.addEventListener("keydown", (event) => {
  const length = input.value.length;
  count.textContent = characterLimit - length;
});

//Add to the list
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  count.textContent = characterLimit;
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }

  if (input.value) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = input.value;
    const span = document.createElement("span");
    span.classList = "trash";
    span.textContent = "🗑";
    li.prepend(span);
    ul.append(li);

    const trash = document.querySelectorAll(".trash");
    trash.forEach((bin) => {
      bin.addEventListener("click", (event) => {
        event.target.nextSibling.remove();
        bin.remove();
      });
    });

    //Add text decoration to cross out items
    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through solid black";
    });

    event.target.reset();
  } else {
    //display error message
    if (!document.querySelector("p")) {
      const error = document.createElement("p");
      error.textContent = "Try again! There's nothing to add.";
      form.append(error);
      event.target.reset();
    }
  }
});

//Add text decoration to cross out items
const lists = document.querySelectorAll("li");

for (let list of lists) {
  list.addEventListener("click", () => {
    list.style.textDecoration = "line-through solid black";
  });
}
