const mainHeading = document.querySelector('#main-heading')
mainHeading.style.textAlign = 'center'

const fruits = document.querySelector('.fruits')
fruits.style.backgroundColor = 'gray'
fruits.style.padding = '30px'
fruits.style.margin='30px'
fruits.style.width='50%'
fruits.style.borderRadius = '5px'
fruits.style.listStyleType='none'

document.querySelector('h2').style.marginLeft='30px'

let fruit = document.querySelectorAll('.fruit')
for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor = 'white'
  fruit[i].style.padding ='10px'
  fruit[i].style.margin='10px'
  fruit[i].style.borderRadius = '5px'
  
}

let oddfruits = document.querySelectorAll('.fruit:nth-child(odd')
for(let i=0;i<oddfruits.length;i++){
  oddfruits[i].style.background = 'lightgray'
}
  
// Write answer to the questions asked below:

document.querySelector('#basket-heading').style.color  = 'brown'

let evenfruits = document.querySelectorAll('.fruit:nth-child(even')
console.log(evenfruits)
for(let i=0;i<evenfruits.length;i++){
  evenfruits[i].style.background = 'brown'
  evenfruits[i].style.color = 'white'
}