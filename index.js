const ul = document.querySelector("ul")
const p = document.querySelector("p.paragraph")

const form = document.querySelector("form");
form.todoText.addEventListener("input",()=>{
    p.innerText =""
})
form.addEventListener("submit", (event) => {
    event.preventDefault()

    //const text =  event.target.text.value;

    const li = document.createElement("li")
    li.innerText = event.target.todoText.value
     

    if(form.todoText.value.trim()=== ""){
    
    
    p.innerText = "Error. Todo cannot be found"

    }else{
        ul.append(li)
        const allLis= document.querySelectorAll("li");
        allLis.forEach((single)=>{
        single.addEventListener("click",()=>{
            single.style.textDecoration = "line-through"
            }) 
        })
    }
    form.reset()
})



