// // console.log("Code your solution!")
// const toDoform = document.querySelector("form");
// // console.log(form);
// // const task = document.querySelector("#lister")

// toDoform.addEventListener("submit", (event) =>{
//     event.preventDefault()

//     const li = document.createElement("li");
//     li.textContent = task.value

//     const ul = document.querySelector("ul")

//     ul.append(li)

//     form.reset()
// })

// create a variable equal to the ul tag
const ul = document.querySelector('ul')
// create a variable equal to the form tag
const form = document.querySelector('form')


// WHEN THE SUBMIT BUTTON IS CLICKED THE TEXT FROM THE INPUT FIELD WILL BE MADE A LI AND ADDED TO A UL

// add event listener to the form with the event of submit 
form.addEventListener('submit', (event) => {
    // keep the page from refreshing with event prevent default
    event.preventDefault()

    // create a variable equal to the li tag
    const li = document.createElement('li')

    // the li words will be equal to the value of the todo id 
    // (what the user types in the input type field will be the words of the li tag)
    li.textContent = event.target.todo.value;

    // add those words to the ul tag
    ul.append(li);
    
    // add event listener to the li tag with the event cliick
    li.addEventListener("click", (event) => {

        // when a li tag is clicked a line will run through it (cross the words out)
       li.style.textDecoration = "line-through"
    });
    
    // the form will reset from blank list 
    form.reset();
});