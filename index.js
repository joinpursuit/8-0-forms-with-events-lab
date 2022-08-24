console.log("Code your solution!");
//grab each element and store it into variables
const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
const form = document.querySelector("form");

//add event listener to form. it is looking for a 'submit'
//prevent default refresh
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  //get the text input value by using the event target. dot into it referring to it's 'name' attribute
  li.textContent = e.target.todo.value;
  //add the created li to the ul
  ul.append(li);
  form.reset();
  //make another eventListener for when the li is clicked
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  const buttonToDelete = document.createElement("button");
  buttonToDelete.type = "submit";
  buttonToDelete.innerHTML = "Delete";
  buttonToDelete.name = "Delete";
  buttonToDelete.style.margin = "10px";
  li.append(buttonToDelete);
  buttonToDelete.addEventListener("click", (e) => {
    li.remove();
  });
});
