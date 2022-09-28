console.log("Code your solution!")

const form = document.querySelector("form");
const ul = document.querySelector("ul")
const input = document.querySelector("input")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const chore = event.target.todo.value;
    const li = document.createElement("li");

    if(chore) {
        li.textContent = `${input.value}`;
        ul.append(li);
    }
    else {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Error! Todo cannot be empty";
        event.target.after(errorMessage);
    }

    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
    });
});
  
// form.reset()
// listItem.addEventListener(`click`, e => {
//     e.target.style.textDecoration =`line-through`
//     })

//     window.onload = () => {
//         let ls = document.querySelectorAll('#chores li');
//         ls.forEach((ele) => {
//            ele.onclick = (ele) => {
//               ele.target.style="text-decoration:line-through";
//            };
//         });
    
//     }
// });