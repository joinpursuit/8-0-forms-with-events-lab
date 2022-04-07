console.log("Code your solution!")
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

    
      const input = document.querySelector("input");

      if (input.value.length === 0) {
          const paragraph = document.querySelector("p");
          paragraph.textContent = "Error. To-do list is empty!";
      } else{
          const newTask = document.createElement("li");
          const addTaskButton = document.createElement("button")
          newTask.textContent = input.value;
          document.querySelector("ul").appendChild(newTask);
      }
      input.value = "";
    });
