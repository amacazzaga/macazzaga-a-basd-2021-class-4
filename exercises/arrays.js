
let arrMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(arrMonths[4])
console.log(arrMonths[10])
/* a)Dado el siguiente array:
 ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
  mostrar por consola los meses 5 y 11 (utilizar console.log).*/
let sortMonths = arrMonths.sort()
console.log(sortMonths)
/* b)Ordenar el array de meses alfabéticamente y mostrarlo por consola
 (utilizar sort).*/
arrMonths.push("ultimoElemento")
console.log(arrMonths)
arrMonths.unshift("primerelemento")
console.log(arrMonths)
/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
arrMonths.pop()
console.log(arrMonths)
arrMonths.shift()
console.log(arrMonths)
/* d)Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
arrMonths.reverse()
console.log(arrMonths)
/* e) Invertir el orden del array (utilizar reverse).*/
let firstJoin = arrMonths.join()
let secondJoin = arrMonths.join("")
let thirdJoin = arrMonths.join("-")
console.log(thirdJoin)
/* f) Unir todos los elementos del array en un único string 
donde cada mes este separado por un guión - (utilizar join).
*/
let arrMonths2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let copyArrMonths= arrMonths2.slice(4,11)
console.log(copyArrMonths)
/* g)Crear una copia del array de meses que contenga desde 
Mayo hasta Noviembre (utilizar slice).*/


