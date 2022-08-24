console.log("Code your solution!");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
    e.preventDefault(); //keeps page from submitted
    console.log(e);
    const li = document.createElement("li");
    li.textContent = e.target.todo.value; //.todo refres to the name of the input
    console.log(li); //
    //!append the created `li` to the list.
    ul.append(li);
    form.reset()
    // //! create error
    // const errMessage = document.getelementById(errorMsg)
    //! When the user clicks on one of the `li` items, the item should be crossed out
    li.addEventListener("click", (event) => {
      console.log(event);
      li.style.textDecoration = "line-through";
    });
    //! bonus
    const del = document.createElement("button")
del.innerHTML = "Delete"
del.type="submit"
del.name="fromDel"
del.style.margin = '10px'
li.append(del)
del.addEventListener("click", (e)=>{
    li.remove()
})
   });
   

