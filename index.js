console.log("Code your solution!")
const ul = document.querySelector('ul')
const form = document.querySelector('#form1')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const li = document.createElement('li')
    li.textContent = event.target.myText.value;
    ul.append(li);

    li.addEventListener("click", (event) => {
       li.style.textDecoration = "line-through"
    });

    form.reset();
});
