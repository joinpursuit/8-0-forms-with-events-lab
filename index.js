let userForm = document.querySelector("form");
let list = document.querySelector("#items");

document.querySelector("textarea").addEventListener("keydown", (event) => {
  //   console.log(event.which);
  if (event.which === 13 && !event.shiftKey) {
    event.preventDefault();
    userForm.dispatchEvent(new Event("submit"));
  }
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  function createListItem() {
    item = item.split("\n");

    for (let thingy of item) {
      if (thingy.trim() === "") {
        continue;
      }
      let listitem = document.createElement("li");
      listitem.textContent = thingy;

      listitem.style.margin = "10px";

      let liButton = document.createElement("button");
      liButton.type = "button";
      liButton.innerHTML = "delete";
      liButton.style.margin = "10px";
      listitem.append(liButton);
      list.append(listitem);

      listitem.addEventListener("click", (event) => {
        if (
          event.target.style.textDecoration === "none" ||
          event.target.style.textDecoration === ""
        ) {
          event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)";
        } else {
          event.target.style.textDecoration = "none";
        }
      });
    }
  }

  let item = textarea.value;
  let ps = document.querySelector("ul p");
  if (!item && !ps) {
    let pTag = document.createElement("p");
    pTag.textContent = "Error! Todo cannot be empty";
    list.prepend(pTag);
  } else if (item && ps) {
    ps.remove();
    createListItem();
    event.target.reset();
    //textarea.value = "";
  } else if (item && !ps) {
    createListItem();
    event.target.reset();
    //textarea.value = "";
  }

  let buttonBol = document.querySelectorAll("li button");
  for (buttons of buttonBol) {
    buttons.addEventListener("click", (event) => {
      event.path[1].remove();
    });
  }
});
