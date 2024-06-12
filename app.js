// let x = document.getElementById("#login")
// let y = document.getElementById("#register")
// let z = document.getElementById("#btnnew")


// function register() {
//     x.style.left = "-450px"
//     y.style.right = "60px"
//     z.style.right = "110px"
    
// }
const reg = document.getElementById('register')
const log = document.getElementById('login')
const but1 = document.getElementById('but1')
const but2 = document.getElementById('but2')

but1.style.background = 'linear-gradient(to right, #ff105f, #ffad0f )'
but1.style.borderRadius = '30px'


function register(){
  reg.style.display = 'block'
  log.style.display = 'none'
  but1.style.background = 'none'
  but1.style.borderRadius = '30px'
  but2.style.borderRadius = '30px'
  but2.style.background = 'linear-gradient(to right, #ff105f, #ffad0f )'
}
function login(){
  reg.style.display = 'none'
  log.style.display = 'block'
  but2.style.background = 'none'
  but2.style.borderRadius = '30px'
  but1.style.borderRadius = '30px'

  but1.style.background = 'linear-gradient(to right, #ff105f, #ffad0f )'
}
























