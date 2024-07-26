// Write your code below:

// Write your code below:

// Write your code below:

let form = document.querySelector('form')
// console.log(f[0])
// Test Name
// test@test.com
//   1234567890
form.addEventListener('submit',handleFormSubmit)
function handleFormSubmit(event){
  event.preventDefault()
  console.log("event target: ",event.target)
  // let name = document.getElementById('username').value
  let name = event.target.username.value
  let email = event.target.email.value
  let phno = event.target.phone.value
  // let email = document.getElementById('email').value
  // let phno = document.getElementById('phone').value

  localStorage.setItem('Username',name)
  localStorage.setItem('Email',email)
  localStorage.setItem('Phone',phno)
  
}
module.exports = handleFormSubmit;


