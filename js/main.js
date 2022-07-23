// let age = +prompt("son kiriting");

// if(age > 0 && age <= 18){
//    alert("Yoshsiz. o'qishingiz kerak")
// }else if(age > 18 && age <= 50){
//    alert("Ishlashingiz kerak")
// }else if(age > 50 && age <=59){
//    alert("Yaqinda pensiyaga chiqasiz")
// }else if(age > 59 && age <=150){
//    alert("Pensionerga o'xshaysiz hali tirik bo'lsangiz")
// }

let son1 = +prompt('Birinchi sonni kiriting')
let son2 = +prompt('Ikkinchi sonni kiriting')
let son3 = +prompt('Uchunchi sonni kiriting')
if (son1 > son2 && son1 < son3 || son1 > son3 && son1 < son2 ) {
   alert(son1)
} else if (son2 > son1 && son2 < son3 || son2 > son3 && son2 < son1) {
  alert(son2)
} else{
   alert(son3)
} 


var user = prompt("Ismingizni kiriting");
password = "Dilnoz"

if(user === password) {
   console.log("Hello boss");
}else{
   console.log("Hello guest");
}


