const form = document.querySelector("form");




form.addEventListener("submit",(event) => {
  event.preventDefault();
   
  const textInput = event.target.ppp.value
  form.reset();

   if (textInput === "")
      alert("Please insert what to do")
   else {
      const ul= document.querySelector("ul")
      const li = document.createElement("li")
      li.textContent = textInput;
      ul.append(li)}

     
})




