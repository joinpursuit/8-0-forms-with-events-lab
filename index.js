const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const paragraph = document.querySelector("p");
    const ulList = document.querySelector("ul");
    const list = document.createElement("li");
    const item = event.target.userInput.value;
    if (item.length === 0){
        paragraph.textContent = "Error. Input can not be empty"
    } else { (item.textContent === "") 
        list.textContent = item;
        ulList.append(list);
    }
    event.target.reset();
});

  
const ulList = document.querySelector("ul");
    ulList.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.style["text-decoration"] = "line-through";
});





