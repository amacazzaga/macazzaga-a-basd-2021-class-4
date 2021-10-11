

var myArr = ["monday","tuesday","wednesday","thursday","friday"]
for (let i = 0; i < myArr.length; i++) {
    
    window.alert(myArr[i])
}
/*Crear un array que contenga 5 palabras y recorrer dicho array 
utilizando un bucle for de JavaScript para mostrar una alerta utilizando 
cada una de las palabras.*/


for (let i = 0; i < myArr.length; i++) {
    let firstPosition = myArr[i][0]
    let firstToUpper = firstPosition.toUpperCase()
    window.alert(firstToUpper+myArr[i].slice(1)) 
}
/*Al array anterior convertir la primera letra de cada palabra 
en mayúscula y mostrar una alerta por cada palabra modificada.*/

var sentence = "";
for (var i = 0; i < colors.length; i++) {
    sentence += colors[i] + " " ;
}
alert(sentence);
/*Crear una variable llamada “sentence” que tenga un string vacío,
luego al array del punto a) recorrerlo con un bucle for para ir
guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa*/  
var emptyArr = [];
for (var i = 0; i < 10; i++) {
    emptyArr[i] = i;
}
console.log(emptyArr);

/*
Crear una array vacío y con un bucle for de 10 repeticiones. 
Llenar el array con el número de la repetición, es decir que al final
de la ejecución del bucle for debería haber 10 elementos dentro del array, 
desde el número 0 hasta al número 9. Mostrar por la consola del navegador
el array final (utilizar console.log)*/
     
        

