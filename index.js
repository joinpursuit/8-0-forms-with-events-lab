console.log('Code your solution!');

function displayError() {
  const div = document.createElement('div');
  document.querySelector('.container').append(div);
  div.setAttribute('class', 'error');
  div.setAttribute('style', 'text-align:center');
  const errorPara = document.createElement('p');
  div.append(errorPara);
  errorPara.setAttribute('class', 'error');
  errorPara.textContent = 'Error. Todo cannot be empty';
  errorPara.setAttribute('style', 'color:red');

  setTimeout(() => {
    //  removes element from DOM
    errorPara.style.display = 'none';
    // hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const todoList = document.querySelector('#tasks');

  const addBtn = document.querySelector('.addBtn');
  const todoDeleteBtn = document.getElementById('clearBtn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let textArea = document.querySelector('textarea');

    const errorPara = document.querySelector('p');
    const words = textArea.value.split('\n');
    if (textArea.value === '') {
      errorPara.textConent = '';
    } else {
      words.forEach((word) => {
        if (word !== '') {
          let listItem = document.createElement('li');
          listItem.textContent = word;
          listItem.classList.add('todo-item');
          todoList.appendChild(listItem);

          listItem.addEventListener('click', (e) => {
            console.log(e.target);
            e.preventDefault();
            listItem.classList.toggle('completed');
          });

          let checkbox = document.createElement('span');
          checkbox.type = 'checkbox';
          checkbox.classList.add('checkboxes');
          checkbox.innerHTML = "<i class='fas fa-check'></i>";
          listItem.append(checkbox);
          checkbox.setAttribute('name', 'tasks');

          checkbox.addEventListener('change', () => {
            if (!checkbox.checked) {
              checkbox.parentNode.classList.add('completed');
            } else {
              checkbox.parentNode.classList.remove('completed');
            }
          });

          let delButton = document.createElement('button');
          delButton.classList.add('delete-button');
          delButton.innerHTML = "<i class='fas fa-trash'></i>";
          listItem.append(delButton);

          delButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
          });
        }
        form.reset();
        textArea.focus();
      });
    }

    todoDeleteBtn.addEventListener('click', function () {
      todoList.innerHTML = '';
    });
    // textArea.value = '';
    // textArea.focus();
  });
});
