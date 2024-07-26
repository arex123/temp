// Add input element inside form, before button, to take fruit description
let des = document.createElement('input')
des.id = "description"
let form  = document.querySelector('form')
let btn = document.querySelector('.add')
form.insertBefore(des,btn)


// Show the fruit description in italics on the next line
let fruit = document.querySelectorAll('.fruit')
for(let i=0;i<fruit.length;i++){
  let np = document.createElement('p')
  // if(fruit[i].firstChild.textContent =='Kiwi'){
    
  // np.appendChild(document.createTextNode('King of fruits'))
  // }else
  np.appendChild(document.createTextNode('King of fruits'))
  np.style.fontStyle= 'italic'

  fruit[i].appendChild(np)
  // let fbtn = 
  
}

// Create a filter that shows only those fruits whose either name or description or both matches the entered tex
let filter = document.getElementById('filter')
filter.addEventListener('keyup',function(event){
  let searchT = event.target.value.toLowerCase()
  for(let i=0;i<fruit.length;i++){
    let currText = fruit[i].firstChild.textContent.toLowerCase()
    let dess =fruit[i].querySelector('p').textContent.toLowerCase()
    console.log(currText,searchT,currText.indexOf(searchT))
    if(currText.indexOf(searchT)==-1 && dess.indexOf(searchT)==-1){
      fruit[i].style.display='none'
    }else{
      fruit[i].style.display='block'
      
    }
  }
})





