// Write your code below:
// Write your code below:


// Write your code below:
let h = document.getElementById("main-heading");
h.textContent = "Fruit World";
h.style.color = 'orange'

let header = document.getElementById('header')
header.style.backgroundColor = "green"
header.style.borderBottom = "1px solid orange"

let dd = document.getElementById('basket-heading')
dd.style.color = "green"

let pp = document.getElementById("thanks")
pp.innerHTML = "<p>Please visit us again</p>"


let list = document.getElementsByClassName("fruit")
for(let i=0;i<list.length;i++){
  list[i].style.fontWeight = "bold"
}
list[2].style.background = "yellow"



let list = document.getElementsByTagName("li")
list[4].style.color = "blue"
for(let i=0;i<list.length;i++){
  list[i].style.fontStyle = "italic"
}