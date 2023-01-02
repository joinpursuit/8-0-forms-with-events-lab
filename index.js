//console.log("Code your solution!")
/**
 * select button
 * select body
 * create unordered list
 * add list to body
 */
const btn = document.querySelector('button');
const body = document.querySelector('body');
const list = document.createElement('ul');
body.append(list)

/**
 * listening for click
 * .preventDefault so page doesn't refresh
 */
btn.addEventListener('click', (event) => {
    event.preventDefault()

    //getting value of what is typed into the input field
    const search = document.getElementById('search').value;
    console.log(search);

    //creating list item
    const listItem = document.createElement('li');

    //when text is clicked on, strikethrough indicating completed task
    listItem.onclick = function strikeOut () {
        listItem.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
    }

    //creating delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'deleteListItem');
    deleteBtn.innerHTML = 'Delete'
   
    //when button is clicked, it will delete the line item
    deleteBtn.onclick = function deleteBtn () {
        listItem.remove();
    }

    //nesting
    listItem.appendChild(document.createTextNode(search))
    listItem.appendChild(deleteBtn)
    list.appendChild(listItem)

    //clearing form after submit
    const form = document.querySelector('form')
    form.reset();

    //if submit w/o anything in input field
    if(search ===''){
        const p = document.createElement('p');
        p.innerHTML = "error: to-do can't be empty."
        form.append(p);
    }
})

