
/*////////////////////////Variables y operadores/////////////////////////
let a = 10
let b = 20
let c = a+b
console.log(c)
/////////////////////////////////////////////
let primeraString = "hola"
let segundaString = "mundo"
let sumaString = primeraString+segundaString
console.log (sumaString)
///////////////////////////////
let terceraString = "buen"
let cuartaString = "dia"
let stringLength = terceraString.length + cuartaString.length
console.log (stringLength)
//////////////////////Strings//////////////////////////////*/
/*let stringToUpper = "agustindesktop"
let stringTuUpperCase = stringToUpper.toUpperCase()
console.log (stringTuUpperCase)
////////////////////////////////////////////////
let firstFive = "usersagustin"
let firstFiveCharat = firstFive.substring(0,5)
console.log (firstFiveCharat)
/////////////////////////////////////////////////
let lastTree = "javascriptlenguaje"
let lastTreeWords = lastTree.substring(15,18)
console.log(lastTreeWords)
///////////////////////////////////////////////////
let anotherString = "outlinetimeline"
let toUpperCase = anotherString.substring(0,1).toUpperCase()
let toLowerCase = anotherString.substring(1,anotherString.length).toLowerCase()
let finalStringToUpperCase = toUpperCase+toLowerCase
console.log(finalStringToUpperCase)
//////////////////////////////////////////////////
let blankWordSomeWhere = "selection view"
let spaceBlank = blankWordSomeWhere.indexOf(" ")
console.log(spaceBlank)
///////////////////////////////////////////////////
let twoWords = "thefirstword thesecondword"
let findTheBlankSpace = twoWords.indexOf(" ") /// this to found were the cut must be
let firstWordToUpper = twoWords.substring(0,1).toUpperCase()
let theRestToLower = twoWords.substring(1,13).toLowerCase()
let firstPart = firstWordToUpper+theRestToLower
let secondToUpper = twoWords.substring(13,14).toUpperCase()
let theSecondRestToLower = twoWords.substring(14,twoWords.length).toLowerCase()
let secondPart = secondToUpper+theSecondRestToLower
let stringResult = firstPart+secondPart
console.log(stringResult)*/
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