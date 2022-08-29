const formElementRef = document.querySelector('form')
const todosListElementRef = document.querySelector('ul')
const bodyElementRef = document.querySelector('body')

const toggleTodo = (todoRef) => {
  const isCompleted = todoRef.style.textDecoration === 'line-through'

  if (isCompleted) {
    todoRef.style.textDecoration = 'initial'
  } else {
    todoRef.style.textDecoration = 'line-through'
  }
}

const createTodo = (inputRef) => {
  // LIMPIAR EL MENSAJE DE ERROR SI EXISTE
  const errorElementRef = document.querySelector('.error')

  if (errorElementRef) {
    errorElementRef.remove()
  }

  const value = inputRef.value
  // Creamos un nuevo elemento LI
  const todoElement = document.createElement('li') // ==> <li></li>

  // Insertamos el texto del INPUT (proveido por el usuario) dentro del nuevo elemento LI
  todoElement.textContent = value // ==> <> {inputValue} </>

  // Cuando crea el todo, le agrega el EVENT LISTENER Del click para ejecutar la funcion toggleTodo
  todoElement.addEventListener('click', () => toggleTodo(todoElement))

  // Agregamos el nuevo elemento LI al listado
  todosListElementRef.appendChild(todoElement)

  // Reseteamos el input
  inputRef.value = ''
}

const displayError = () => {
  // LIMPIAR EL MENSAJE DE ERROR SI EXISTE
  const errorElementRef = document.querySelector('.error')

  if (errorElementRef) {
    errorElementRef.remove()
  }

  const errorElement = document.createElement('p')
  errorElement.classList.add('error')
  errorElement.textContent = 'Error. Todo cannot be empty'

  bodyElementRef.appendChild(errorElement)
}


// EVENTO PRINCIPAL ==> SUBMIT
// Con este event listener sobreescribimos el comportamiento nativo del submit de los formularios (REFRESH DE LA PAGINA, ETC)
formElementRef.addEventListener('submit', (eventInfo) => {
  eventInfo.preventDefault()

  const inputRefElement = document.querySelector('input')
  const inputValue = inputRefElement.value

  if (!inputValue.trim().length) {
    displayError()
    return
  }

  createTodo(inputRefElement)
})


console.log(formElementRef)