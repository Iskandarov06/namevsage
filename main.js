let name = prompt ('Ismingizni kiriting')
while (!isNaN(name) || name ==0) {
  name = prompt("ismingizni qayta kiriting")
}
let age = +prompt ('Yilingizni kiriting')
while (isNaN(age) || age == 0) {
  age = prompt("yoshingizni qayta kiriting")
}
let year = 2023
function old () {
 let a = year-age
 alert(name + " siz " +a +" yoshdasiz");
}
old () 
