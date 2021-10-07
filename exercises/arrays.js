/////////////////////////////arrays////////////////////////////////

let arrMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(arrMonths[4])
console.log(arrMonths[10])
///////////////////////////////////////////////////////////////////////
let sortMonths = arrMonths.sort()
console.log(sortMonths)
//////////////////////////////////////////////////////////////////////
arrMonths.push("ultimoElemento")
console.log(arrMonths)
//////////////////////////////////////////
arrMonths.unshift("primerelemento")
console.log(arrMonths)
////////////////////////////////////////////////
arrMonths.pop()
console.log(arrMonths)
//////////////////////////////////////
arrMonths.shift()
console.log(arrMonths)
/////////////////////////////////////////
arrMonths.reverse()
console.log(arrMonths)
////////////////////////////////////// 
let firstJoin = arrMonths.join()
let secondJoin = arrMonths.join("")
let thirdJoin = arrMonths.join("-")
console.log(thirdJoin)
/////////////////////////////////////
let arrMonths2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let copyArrMonths= arrMonths2.slice(4,11)
console.log(copyArrMonths)
