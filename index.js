console.log("Code your solution!")
const form = document.querySelector("form");
//submitting form will bring more li elements in the ul list
 form.addEventListener("submit", (event) => {
  event.preventDefault();

//using this to insert list elements easily inside of ul
const ulinside = document.querySelector("#start")

let li = document.createElement("li");

//here we are inserting li elements inside of ul
ulinside.append(li)
let thevalue = document.querySelector("input[type='text']").value

li.innerHTML = thevalue

document.getElementById("form").reset();



      })

//makes strike through text
let dox = document.getElementById('#list');
list.addEventListener("click", function(strike){
    if(strike.target.tagName === "LI"){
    strike.target.classList.toggle("checked")}
})





    //   document.querySelector("form ul").children.addEventListener("onclick", (event) => {
    //     event.preventDefault();
    //     event.target.style.textDecoration = "none"
    
    //     if(event.target.style.textDecoration === "none"){
    //         event.target.style.removeProperty("text-decoration");
    //         event.target.style.textDecoration = "line-through";
    //   }else{
    //     event.target.style.removeProperty(textDecoration);
    //     event.target.style.textDecoration = "none";  }
      
    //   })







// let liz = document.querySelectorAll("li")
// let ulz = document.querySelector("ul")

//   for (element of liz){
//     element.target.onclick = function() {liz.setAttribute('class', 'strike')};
    
//     }
  






// let numbercap = document.querySelectorAll(".strike")
// for (element of numbercap){

//    element.addEventListener("onclick", (event)=>{

// element.style.textDecoration = "line-through"

//    }
// )


// }






// const allLI = document.querySelectorAll("li");
// for (let element of allLI){
//     element.onclick= (event) => { 
//         (element)
//     }

// }


// // Strikethroug on List Items
// allItemsinUL = document.querySelectorAll("li");


// for(i=1;i<=document.querySelectorAll("li").length; i++){
// document.querySelector(`li:nth-child${i}`).onclick = (event) => { 
//     document.querySelector(`li:nth-child${i}`).style.textDecoration = "line-through";


// };

// }


// for(let liz of allItemsinUL){


//     if(liz.style.textDecoration === "line-through"){
//         if(liz.clicked===true){                
//             liz.style.removeProperty("text-decoration")

//         }

//         else if (liz.style.textDecoration===null){
//             if(liz.clicked===true){        
//                 liz.style.textDecoration = "line-through"

//         }
//     }
// }
// }


// //     let allLISTelements = document.querySelectorAll("li")


// //     for (let element of allLISTelements){
    
// //   })
  

// // let allLISTelements = document.querySelectorAll("li")









// // const buttonsubmit = (event) =>{

// //     event.preventDefault();

// // const form2 = document.querySelector("form input[type='text']")
// // const formvalue = form2.value




// //     const itemssection= document.getElementById("itemssection")
// //     console.log(itemssection)

// //     let li = document.createElement("li");
// // let ul = document.querySelector("ul");
// // ul.appendChild(li)
// // li.innertext = formvalue


// // // let sec = document.querySelector("#itemssection");
// // // sec.insertAdjacentHTML("afterend", allItems);
// // };



// // document.querySelector("h1").innerText = "My To-Dos";
// // let headerELEMENT = document.querySelector("h1");

// // let ul_LIST = document.createElement("ul")
// // headerELEMENT.append(ul_LIST);
// // ul_LIST.class = "ulLIST";

// // document.createElement("form");
// // let formlist = document.querySelector("form");
// // ul_LIST.append(formlist)

// // formlist.class = itemFORMlist;
// // let button = document.createElement("button");

// // formlist.append(button);




// // const submitITEMForm = (event) =>{
// //     event.preventDefault();

// //     const itemFORMlist= document.getElementById("itemFORMlist")
// // console.log(itemFORMlist)
// // const form = new FormData(event.target);
// // const userSubmission = Object.fromEntries(form);
// // }








// console.log("Code your solution!")

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();


// const ulinside = document.querySelector("#start")
// let li = document.createElement("li");

// //  document.querySelector("li");


// ulinside.append(li)
// let thevalue = document.querySelector("input[type='text']").value
// li.innerHTML = thevalue
// document.getElementById("form").reset();

// })