console.log("Code your solution!")

let formElement = document.querySelector('form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    let liElement = document.createElement('li');

    if (event.target.textInput.value === '') {
        document.querySelector('p').textContent = "error"
    } else {

        document.querySelector('p').textContent = '';

        liElement.textContent = event.target.textInput.value;
        
        liElement.addEventListener('click', handleClick => {
            handleClick.target.style.textDecoration = 'line-through'
        })

    let ulElement = document.querySelector('ul');

        ulElement.append(liElement);
        
        event.target.textInput.value = ''

    

    }

    
})