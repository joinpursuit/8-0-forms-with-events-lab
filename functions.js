const task = document.querySelector('#list');
console.log(task.hasChildNodes())
if(task.hasChildNodes()){
    console.log('list')
    const item = document.querySelector('li');
    item.addEventListener(() => {
        console.log(item.value)
        item.classList.add('striked');
    })
    
}