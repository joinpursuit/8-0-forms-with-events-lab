// console.log("Code your solution!")

const form = document.querySelector('#new-list-form')

form.addEventListener('submit',(event) => {
  event.preventDefault()
  const name = event.target.item.value
  generateContact()
})

function contactTemplate (item, notes) {
    const li = document.createElement("li");
    li.textContent += item;

      if (notes) {
      li.append(document.createElement("br"), notes);
    }

    return li;
  }

function generateContact (item, notes) {
    const li = contactTemplate(item, notes);
  
    const ul = document.querySelector("ul");
    ul.append(li);
  
    UpdateContactCount()
  }
