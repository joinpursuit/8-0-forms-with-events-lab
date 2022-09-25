console.log("Code your solution!")

const form=document.querySelector("form")
const body=document.querySelector("body")
 const ul = document.querySelector("ul");
 const err=document.querySelector("#error")

 form.addEventListener("submit",(event)=>{
    event.preventDefault()

    
    if (event.target.chore.value){
    const li = document.createElement('li')
 li.textContent = event.target.chore.value
 ul.append(li)
 li.addEventListener('click', (event) => {
 li.style.textDecoration = "line-through"
 })
}
 if (!event.target.chore.value){
    err.textContent="Error. To do cannot be empty"
 }


 })
