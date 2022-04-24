console.log("Code your solution!")
 document.addEventListener('DOMContentLoaded', () =>{
     const form = document.querySelector('form');
     const ul = document.querySelector('ul');
     const p = document.querySelector('p');


     form.addEventListener('submit' , e => {
         e.preventDefault();

         let input = document.getElementById('input').value;

         if(!input) {
             p.innerText = 'Error: Insert Text';
         } else {
             let li = document.createElement('li');
             li.innerText = input;
             ul.appendChild(li);
         };
     });

     ul.addEventListener('click' , e => {
         e.target.style.textDecoration = 'line-through'
     });
 });