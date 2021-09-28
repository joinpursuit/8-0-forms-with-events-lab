let userForm = document.querySelector("form");
let list = document.querySelector("#items");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let item = todo.value;
  let ps = document.querySelector("ul p");
  if (!item && !ps) {
    let pTag = document.createElement("p");
    pTag.textContent = "Error! Todo cannot be empty";
    list.prepend(pTag);
  } else if (item && ps) {
    ps.remove();
    let listitem = document.createElement("li");
    listitem.textContent = item;
    list.append(listitem);

    listitem.style.margin = "10px";
    todo.value = "";
  } else if (item && !ps) {
    let listitem = document.createElement("li");
    listitem.textContent = item;
    list.append(listitem);

    listitem.style.margin = "10px";
    todo.value = "";
  }

  let allItems = document.querySelectorAll("li");
  for (let liItem of allItems) {
    liItem.addEventListener("click", (event) => {
      liItem.style.textDecoration = "line-through solid rgb(0, 0, 0)";
    });
  }
});
// liButton.addEventListener("click", (event) => {
//     liItem.remove();
//   });
// let buttonBol = document.querySelector("li button");

//     if (!liItem.contains(buttonBol)) {
//       liButton.type = "button";
//       liButton.innerHTML = "delete";
//       liButton.style.margin = "10px";
//       liItem.append(liButton);
//     }
