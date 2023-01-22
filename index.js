console.log("Code your solution!")
const ul = document.querySelector("ul");
const p = document.querySelector("p");
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

const text = event.target.text.value;
const li = document.createElement("li");
    li.textContent = text;
    ul.append(li)
        if (!text) {
    p.textContent = "Error . You have things to do."
    ul.remove(li)
    form.text.addEventListener("focus", () => {
        p.textContent = " "
    })
    } else {
        const liItems = document.querySelectorAll("li")
        liItems.forEach((element) => {
        element.addEventListener('click', () => {
            element.style.textDecoration = "line-through"
        })
    })
  }
});