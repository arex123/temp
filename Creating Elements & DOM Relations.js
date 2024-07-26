// Write your code below:
let nh = document.createElement('h3')
nh.appendChild(document.createTextNode('Buy high quality organic fruits online'))
nh.style.fontStyle='italic'
document.querySelector('div').appendChild(nh)

let tf = document.createElement('p')

tf.appendChild(document.createTextNode('Total fruits: 4'))
tf.id = 'fruits-total'
tf.setAttribute('title','fruits-total')
let sd = document.querySelectorAll('div')[1]
let fruits =document.querySelector('.fruits')
sd.insertBefore(tf,fruits)
