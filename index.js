const text = document.querySelector("input[type='text']");
const tasks = document.querySelector("ul");
const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = document.createElement("li");

  if (!text.value) {
    p.textContent = "No dream entered. Try again!";
  } else {
    task.textContent = text.value;
    tasks.append(task);
  }

  // Bonus: Have the input go back to empty after adding a new todo.
  document.getElementById("todo").value = "";

  task.addEventListener("click", () => {
    task.style.textDecoration = "line-through";
  });

  task.addEventListener("mouseover", () => {
    task.style.fontWeight = "bold";
  });

  task.addEventListener("mouseleave", () => {
    task.style.fontWeight = "normal";
  });
});