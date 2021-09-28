// Character limit countdown
const characterLimit = 30;
const input = document.querySelector("#to-do");
const count = document.querySelector("#count");
count.textContent = characterLimit;

input.addEventListener("keydown", (event) => {
  const length = input.value.length;
  if (length > characterLimit) {
    event.preventDefault();
  } else {
    count.textContent = characterLimit - length;
  }
  event.target.reset();
});
