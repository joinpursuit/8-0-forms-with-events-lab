const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!e.target.todo.value) {
    const errorP = document.createElement("p");
    errorP.textContent = "Error. Todo cannot be empty";
    button.after(errorP);
  }

  const li = document.createElement("li");
  const deleteD = document.createElement("button");
  li.textContent = e.target.todo.value;
  ul.append(li);

  //   li.after(deleteD);
  //   deleteD.setAttribute("class", `${e.target.todo.value}`);
  //   li.setAttribute("class", `${e.target.todo.value}`);

  //   deleteD.addEventListener("click", (e) => {
  //     const buttonDelete = document.getElementsByClassName(
  //       `${e.target.todo.value}`
  //     );
  //     buttonDelete.forEach((element) => {
  //       element.remove;
  //     });
  //   });

  li.addEventListener("click", (e) => {
    li.style.textDecoration = "line-through";
  });

  form.reset();
});

console.log("Code your solution!");
