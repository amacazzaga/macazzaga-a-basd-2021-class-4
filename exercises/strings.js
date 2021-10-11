
var stringToUpper = "agustindesktop"
var stringTuUpperCase = stringToUpper.toUpperCase()
console.log (stringTuUpperCase)
/* a)Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var firstFive = "usersagustin"
var firstFiveCharat = firstFive.substring(0,5)
console.log (firstFiveCharat)
/* b)Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando el 
resultado en una nueva variable (utilizar substring).*/

var lastTree = "javascriptlenguage"
var lastTreeWords = lastTree.substring(15,18)
console.log(lastTreeWords)
/* c) Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con los últimos 3 caracteres guardando 
 el resultado en una nueva variable (utilizar substring).*/

var anotherString = "outlinetimeline"
var toUpperCase = anotherString.substring(0,1).toUpperCase()
var toLowerCase = anotherString.substring(1,anotherString.length).toLowerCase()
var finalStringToUpperCase = toUpperCase+toLowerCase
console.log(finalStringToUpperCase)
/* d)Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
 Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/

var blankWordSomeWhere = "selection view"
var spaceBlank = blankWordSomeWhere.indexOf(" ")
console.log(spaceBlank)
/* e) Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio en blanco y
 guardarla en una variable (utilizar indexOf).*/

var twoWords = "thefirstword thesecondword"
var findTheBlankSpace = twoWords.indexOf(" ") /// this to found were the cut must be done
var firstWordToUpper = twoWords.substring(0,1).toUpperCase()
var theRestToLower = twoWords.substring(1,13).toLowerCase()
var firstPart = firstWordToUpper+theRestToLower
var secondToUpper = twoWords.substring(13,14).toUpperCase()
var theSecondRestToLower = twoWords.substring(14,twoWords.length).toLowerCase()
var secondPart = secondToUpper+theSecondRestToLower
var stringResult = firstPart+secondPart
console.log(stringResult)
/* d) Crear una variable de tipo string con al menos 2 palabras 
largas (10 caracteres y algún espacio entre medio). Utilizar los
 métodos de los ejercicios anteriores para generar un nuevo string que 
 tenga la primera letra de ambas palabras en mayúscula y las demás 
 letras en minúscula (utilizar indexOf, substring, toUpperCase, 
    toLowerCase y el operador +).*/
