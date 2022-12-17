// select the form
const form = document.querySelector('form');
// const div = document.createElement('div');
// let deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";


// add event listener to the form
form.addEventListener('submit', (event)=> {
    event.preventDefault();

    let listItem = document.createElement('li');

    const textValue = event.target.textInput.value;

    listItem.textContent = textValue;
    
    // deleteButton.addEventListener("click", click => {
    
    // });
    
    // div.append(listItem);
    // div.append(deleteButton);
    listItem.addEventListener('click', click => {
        click.target.style.textDecoration = "line-through";
    });

    const ulList = document.querySelector('ul');

    ulList.append(listItem);

    event.target.textInput.value = '';
});
