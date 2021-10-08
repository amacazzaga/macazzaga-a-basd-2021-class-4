
let stringToUpper = "agustindesktop"
let stringTuUpperCase = stringToUpper.toUpperCase()
console.log (stringTuUpperCase)
/* a)Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

let firstFive = "usersagustin"
let firstFiveCharat = firstFive.substring(0,5)
console.log (firstFiveCharat)
/* b)Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando el 
resultado en una nueva variable (utilizar substring).*/

let lastTree = "javascriptlenguage"
let lastTreeWords = lastTree.substring(15,18)
console.log(lastTreeWords)
/* c) Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con los últimos 3 caracteres guardando 
 el resultado en una nueva variable (utilizar substring).*/

let anotherString = "outlinetimeline"
let toUpperCase = anotherString.substring(0,1).toUpperCase()
let toLowerCase = anotherString.substring(1,anotherString.length).toLowerCase()
let finalStringToUpperCase = toUpperCase+toLowerCase
console.log(finalStringToUpperCase)
/* d)Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
 Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/

let blankWordSomeWhere = "selection view"
let spaceBlank = blankWordSomeWhere.indexOf(" ")
console.log(spaceBlank)
/* e) Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio en blanco y
 guardarla en una variable (utilizar indexOf).*/

let twoWords = "thefirstword thesecondword"
let findTheBlankSpace = twoWords.indexOf(" ") /// this to found were the cut must be done
let firstWordToUpper = twoWords.substring(0,1).toUpperCase()
let theRestToLower = twoWords.substring(1,13).toLowerCase()
let firstPart = firstWordToUpper+theRestToLower
let secondToUpper = twoWords.substring(13,14).toUpperCase()
let theSecondRestToLower = twoWords.substring(14,twoWords.length).toLowerCase()
let secondPart = secondToUpper+theSecondRestToLower
let stringResult = firstPart+secondPart
console.log(stringResult)
/* d) Crear una variable de tipo string con al menos 2 palabras 
largas (10 caracteres y algún espacio entre medio). Utilizar los
 métodos de los ejercicios anteriores para generar un nuevo string que 
 tenga la primera letra de ambas palabras en mayúscula y las demás 
 letras en minúscula (utilizar indexOf, substring, toUpperCase, 
    toLowerCase y el operador +).*/
