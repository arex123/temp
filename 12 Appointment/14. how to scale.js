// Write your code below:
let list =document.querySelector('ul')
function handleFormSubmit(event){
  event.preventDefault()
  let det = {
    username:event.target.username.value,
    email:event.target.email.value,
    phone:event.target.phone.value,
  }
  localStorage.setItem(det.email,JSON.stringify(det))


  let newListItem = document.createElement('li')
  let content = document.createTextNode(det.username," - ",det.email," - ",det.phone)
  newListItem.appendChild(content)
  list.appendChild(newListItem)
  
  
}

module.exports = handleFormSubmit

/*

// Write your code below:
let list =document.querySelector('ul')

let form = document.querySelector('form')
form.addEventListener('submit',handleFormSubmit)
function handleFormSubmit(event){
    event.preventDefault()
  console.log("hi")
    let det = {
    username:event.target.username.value,
    email:event.target.email.value,
    phone:event.target.phone.value,
  }
  console.log("det ",det)
  localStorage.setItem(det.email,JSON.stringify(det))


  let newListItem = document.createElement('li')
  let contentt = document.createTextNode(det.username," - ",det.email," - ",det.phone)
  newListItem.appendChild(contentt)
  list.appendChild(newListItem)
  }
  
  module.exports = handleFormSubmit

*/