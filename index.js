// const formAdded = document.querySelector('form')
// const list = document.querySelector('ul')
// function listItem() {
//     formAdded.addEventListener('submit',(event) => {
//     event.preventDefault();
//     list.append(document.createElement('li'));

//     const accessListItems= document.querySelector('li');
//     accessListItems.textContent = document.form.input.value;
//     })
// }

const formElement = document.getElementById('pao')

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let listElement = document.createElement('li');
    const textInputValue = event.target.testInput.value;
    //console.log(event.target.testInput.value)
    //shows value on console 
    listElement.textContent = textInputValue;
    
    listElement.addEventListener('click', handleClick =>{
     handleClick.target.style.textDecoration = "line-through";
    })

    const unorderedListElement = document.querySelector('ul');
    unorderedListElement.append(listElement);
    //creation/ assigenment/functionally and then append
    event.target.testInput.value ='';
})