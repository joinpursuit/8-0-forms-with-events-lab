// const pgh2 = document.createElement("p");
//       pgh2.id = "tasksImage";
//       pgh2.style["font-size"] = "14px";

// const taskImg = document.getElementById('tasksImage');

// function imageStuff () {
//     const img = document.createElement("img");
//     img.src = "images/tasks.png";
//     document.querySelector("body").appendChild(img);
// }

const body = document.querySelector("body");
const pgh = document.createElement("p");
        pgh.style.display = "none";
        pgh.textContent = "Text Field Cannot Be Empty!";

document.querySelector("h1").textContent = "To-Do-List";
const form = document.createElement("form");

const button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.textContent = "Submit";
        button.style["margin-left"] = "10px";

const inputData = document.createElement("input");
        inputData.setAttribute("type", "text");
        inputData.setAttribute("id", "inputData");

body.append(document.createElement("header"));
// body.append(pgh2);
body.append(pgh);
body.append(form);
form.append(inputData);
form.append(button);
body.append(document.createElement("ul"));

button.addEventListener("click", (element) => {
    element.preventDefault();
    if (inputData.value.length == 0 && pgh.style.display === "none") {
        pgh.style.display = "block";
    } else if (inputData.value.length > 0) {
        pgh.style.display = "none";
        let li = document.createElement("li");
        li.textContent = inputData.value;
        document.querySelector("ul").appendChild(li);
    }
    form.reset();
});

document.querySelector("ul").addEventListener("click", (linethrough) => {
    linethrough.preventDefault();
    linethrough.target.style["text-decoration"] = "line-through";
});
