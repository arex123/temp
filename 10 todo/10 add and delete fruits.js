

let fruit = document.querySelectorAll('.fruit')
for(let i=0;i<fruit.length;i++){
  let nb = document.createElement('button')
  nb.appendChild(document.createTextNode("Edit"))
  
  nb.className = 'edit-btn'
  fruit[i].appendChild(nb)
}

let fruits = document.querySelector('.fruits')
let form = document.querySelector('form')
form.addEventListener('submit',function(event){
  event.preventDefault()
  let fta=document.getElementById('fruit-to-add')

  let newEle = document.createElement('li')
  newEle.className="fruit"
  newEle.innerHTML = fta.value+'<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'

  fruits.appendChild(newEle)
  
})

fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    let fruitToDel = event.target.parentElement
    fruits.removeChild(fruitToDel)
  }
})