document.addEventListener("DOMContentLoaded", () => {
  //grab all tags we need below

  const form = document.querySelector("form");
  const p = document.querySelector("#error");
  let input = document.querySelector("#input");
  const ul = document.querySelector("list");
  //created this variable to hold li's(to do items)
  let listItem;

  //add event listener to the form so when clicked the event happens

  form.addEventListener("submit", (event) => {
    //prevents form from refreshing
    event.preventDefault();

    //if the input (info typed in by user) is empty, log the error message
    if (input.value === "") {
      p.textContent = `Error. Todo cannot be empty`;
    } else {
      //else if the info is not empty create an li to list the to do entered in to the input box
      listItem = document.createElement("li");

      //create a new list for the info being put in and loop through the new array, create an li for each new to do put in and let the text for the new do be added to the new li
      let newArray = input.value.split("\n");
      newArray.forEach((el) => {
        listItem = document.createElement("li");
        listItem.textContent = el;

        //add the new li created to the ul

        ul.appendChild(listItem);

        // create the button and add the HTML = delete to the button

        let button = document.createElement("button");
        button.innerHTML = "Delete";

        //add button to the ul as a child and put the text content to the p tag as an empty string and the value of the input to be empty after the info has been submitted
        ul.appendChild(button);
        p.textContent = "";
        input.value = "";
      });
    }
  });

  //Add event listner to the button
  button.addEventListener("click", (e) => {
    e.preventDefault();

    //target the parent node and remove its child which is the li
    e.target.parentNode.removeChild(listItem);
    //target the parent node and remove its child which is the button
    e.target.parentNode.removeChild(button);
  });

  list.addEventListener("click", (e) => {
    let liStyle = e.target;
    if (liStyle.style.textDecoration === "line-through") {
      liStyle.style.textDecoration = "none";
    } else {
      liStyle.style.textDecoration = "line-through";
    }
  
});
