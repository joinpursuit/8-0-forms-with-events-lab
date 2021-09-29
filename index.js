const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = event.target.item.value

    const unorderedList = document.querySelector("ul")
    const list = document.createElement("li")
    list.textContent = item
    unorderedList.append(list)

    const listItem = document.querySelectorAll("li")
    listItem.forEach((item) => {
        item.addEventListener("click", () => {
            item.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
        })
    })
})
