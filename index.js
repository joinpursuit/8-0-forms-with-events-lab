
//This function creates an li, adds a textNode to li.
//Returns complete list item
function contactTemplate(name, notes) {
    const li = document.createElement("li");
    li.textContent += name;
    li.setAttribute('style', 'width:300px;border-style:ridge');
    const liBtn = document.createElement('button');
    liBtn.setAttribute('class', 'li-button');
    liBtn.setAttribute('style', 'background-color: red; border-style:solid; border-color:#FF0000; width:55px; height:20px;float:right');
    liBtn.textContent = 'delete'
    li.append(liBtn);

    if (notes) {
      li.append(document.createElement("br"), notes);
    }
  

    return li;
}

//This function assigns above function to list item. It also selects ul and appends li as a child of unordered list
function generateContact(name, notes ) {
    const li = contactTemplate(name, notes);
    const ul = document.querySelector("ul");
    ul.append(li);
}


//Selects body element
const body = document.querySelector('body');
const main = document.createElement('main');

body.append(main)

for (let i = 0; i < 2; i++){
    const section = document.createElement('section')
    main.append(section)
}

main.firstElementChild.classList.add('sectionOne')
main.lastElementChild.classList.add('sectionTwo')


//Creates a form tag and set an attributes
const form = document.createElement('form');
form.setAttribute('id', 'form-content')
form.setAttribute('style', 'width:500px; display:grid; grid-gap:10px');
//Creates h1 tag and adds a textNode to h1 tag, then appends h1 to the body 
const h1 = document.createElement('h1');
h1.textContent = "My To-Dos";
main.prepend(h1);

//Creates an input tag and sets attributes for tag, then appends input tag to the form
const input = document.createElement('input');
//setting key/pair values as attributes to input tag (name)key, (userInput)value
input.setAttribute('name', 'userInput')
input.setAttribute('id', 'name')
input.setAttribute('type', 'text')
form.append(input);

  //Additional
  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'notes');
  textarea.setAttribute('type', 'notes');
  textarea.setAttribute('style', 'background-color: #85adad');
  textarea.textContent = '';
//const textLi = document.createElement('li')
//textarea.append(textLi)

//Appends textarea tag to form 
    form.append(textarea);


//Creates a Button tag, set attributes and give it a textNode
const submitButn = document.createElement('button');
submitButn.setAttribute('type', 'submit')
submitButn.setAttribute('style', 'width:150px; textAlign:center; background-color: green')
submitButn.textContent = 'submit'
//Appends button to form 
form.append(submitButn);

//Appends whole form to body
//body.append(form);
//Creates an ul tag
const unOrderedList = document.createElement('ul');
unOrderedList.setAttribute('id', 'item');

const mainFirstChild = document.querySelector('.sectionOne')
mainFirstChild.append(form);
const mainSecondChild = document.querySelector('.sectionTwo')
mainSecondChild.append(unOrderedList);

const paragraph = document.createElement('p');
form.after(paragraph)
//Selects the form using its id
const formQuery = document.querySelector("#form-content");
//We are calling EventListener on the form tag w/2 arguments, the type (submit) and a callback (event).
formQuery.addEventListener("submit", (event) => {
    //Expected to stop the default behavior of pressing submit button
    event.preventDefault();
    //Creates variable to store the value of userInput
     //console.log(event.target.userInput.value);
    const name = event.target.userInput.value;
    //const notes = event.target.notes.value;
    if(!name){
      paragraph.textContent = 'Error! Todo cannot be empty';
    } else {
    //Calling above function that selects ul and appends li as a child of unordered list
    generateContact(name);
    //Resets the input field of above function
    event.target.reset()
    }
});



formQuery.addEventListener("submit", (event) => {
  //Expected to stop the default behavior of pressing submit button
  event.preventDefault();
  //Creates variable to store the value of userInput
   //console.log(event.target.userInput.value);
  const notes = event.target.notes.value;
  //const notes = event.target.notes.value;
  if(!notes){
    paragraph.textContent = 'Error! Todo cannot be empty';
  } else {
  //Calling above function that selects ul and appends li as a child of unordered list
  generateContact(notes);
  //Resets the input field of above function
  event.target.reset()
  }
});


document.querySelector("section #notes").addEventListener("click", (event) => {
  //Expected to stop the default behavior of pressing on ul
  event.preventDefault();
  //When target ul is clicked a text-decoration will be applied to that ul
  event.target.style["text-decoration"] = "line-through";
});



//Selects unordered list to add an EventListener w/2 arguments
document.querySelector("ul").addEventListener("click", (event) => {
    //Expected to stop the default behavior of pressing on ul
    event.preventDefault();
    //When target ul is clicked a text-decoration will be applied to that ul
    event.target.style["text-decoration"] = "line-through";
  });

  const itemList = document.getElementById('item');
  itemList.addEventListener('click', removeItem);

 

 // Remove item
function removeItem(e){
  if(e.target.classList.contains('li-button')){
    e.preventDefault()
    if(confirm('Are You Sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('notes')){
    e.preventDefault()
    if(confirm('Are You Sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

 
  