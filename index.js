document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    theUl = document.querySelector("ul")
    liEl = document.createElement("li")
    theUl.append(liEl)
    liEl.textContent = event.target.form.value
    
})



