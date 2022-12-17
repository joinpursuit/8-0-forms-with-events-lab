const kiwi = document.querySelector('form')
const list = document.querySelector('ul')

function listItems() {
    kiwi.addEventListener('submit', (event)=> {
    event.preventDefault();
    list.append(document.createElement('li'))
    const accessListItem = document.querySelector('li');
    // accessListItem.append(document.form.kiwi.value)
    accessListItem.textContent = document.form.kiwi.value;
})
}

// do we need to set class attributes? to create list
//
//function newLine() {
    //i want the text value to display as a <li> after the form use append
    
//}

