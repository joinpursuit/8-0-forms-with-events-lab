// console.log("Code your solution!")

       
  const form =document.querySelector("form");
  const ul = document.querySelector("ul");
  const text = document.querySelector("input[type='text']");
 
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = text.value;
    ul.append(li);

    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
    form.reset();

  });