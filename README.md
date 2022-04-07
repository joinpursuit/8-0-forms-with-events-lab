## Instructions

Our app will have the following items:

- An `h1` title (e.g. "My To-Dos").
- A single `ul` tag, empty when the page is first loaded.
- A `form` for the user to add a new to-do, with a single text `input` and a `submit` button.

And the following functionalities:

- When the user writes something in the `form`'s text input area and clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. The page **should not refresh**.

  <details>
    <summary>
      Hints/Steps
    </summary>

  1. Add an event listener to the form with `.addEventListener`. What event do you want to listen for?
  2. Remember, what does `event.preventDefault()` do?
  3. Grab the value the user typed from the text input. Do you remember what property of the input node has this? If not Google it or ask a peer.
  4. Create new `li` element with `document.createElement()`. Set its `textContent` property to be the text the user typed.
  5. Don't forget to append the created `li` to the list.

  </details>

- When the user writes _nothing_ in the `form`'s text input area and clicks `submit`, an error message (inside a `p` tag) should appear below the form.

  <details>
    <summary>
      Hints/Steps
    </summary>

  1. How can you check if the input text has something typed or not?
  2. Have an empty paragraph that is above the `<ul>` and under the `<form>`. If the user didn't type anything, modify the content of the paragraph to display a text like: 'Error. Todo cannot be empty'

  </details>

- When the user clicks on one of the `li` items, the item should be crossed out, indicating that that to-do is complete. You will need to look at [`[element].style.textDecoration`](https://www.w3schools.com/jsref/prop_style_textdecoration.asp) for the cross out effect. Look at all the different text decoration options.

  <details>
    <summary>
      Hints/Steps
    </summary>

  1. You will need to add an event listener to all the `li` elements. Those `li` elements have yet to be created. How can you add an event listener to these?
  2. How can you only affect the `li` that was clicked on?

  </details>

## Sample

![todos being added to todo list](/todos.gif)

## Bonus Tasks

- Have the input go back to empty after adding a new todo.
- Implement a delete `button` next to each `li` that removes that `li` tag entirely.
- Clicking a todo that is crossed out (completed) uncrosses the todo.
- Add the ability to add multiple to-dos if the user submits a text input with multiple lines. Each line should be a new to-do.
- Add some CSS styling to your app.
