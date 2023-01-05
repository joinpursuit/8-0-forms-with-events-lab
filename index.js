theUl = document.querySelector("ul")
theP = document.querySelector("p")

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.target.form.value.length = 0) {
        theP.textContent += 'Error. Todo cannot be empty';
    }
    else { 
    liEl = document.createElement("li")
    theUl.append(liEl)
    liEl.textContent = event.target.form.value;}
   
})

theUl.addEventListener("click", () => {
        document.querySelector("li").style.textDecoration = "line-through"
    })
;

// document.querySelectorAll("ul li").addEventListener("click", (event) => {
//     event.preventDefault();

//     li.style.textDecoration = line-through;
// })