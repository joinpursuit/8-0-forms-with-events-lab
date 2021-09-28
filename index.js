console.log("Code your solution!");
toDoList.addEventListener("submit", (e) => {
  e.preventDefault();

  let li = document.createElement("li");

  let ul = document.querySelector("ul");

  let toDo = e.target["to-do-list"].value;

  li.textContent = toDo;

  ul.append(li);

  e.target["to-do-list"].value = "";

  li.addEventListener("click", (e) => {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "";
    } else {
      let lineItem = (e.target.style.textDecoration = "line-through");
    }
  });
});
