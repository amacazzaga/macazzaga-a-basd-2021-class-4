
function suma (a,b){
    
   validator(a,b)
 
    if (Number.isInteger(a-b)!=true){
      window.alert ("uno de los numeros es decimal, fue redondeado")
     
      return Math.round(a+b)
    }
    
    else return a+b
     }
  var result = suma (5,6)
  console.log(result)
  /* a,b,c,d)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
 b)A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los
 parámetros tiene error y retornar el valor NaN como resultado.
c)Crear una función validate integer que reciba un número como parámetro y
 devuelva verdadero si es un número entero.
d)A la función suma del ejercicio 6b) agregarle una llamada que valide que
 los números sean enteros. En caso que haya decimales mostrar un alerta 
 con el error y retorna el número convertido a entero (redondeado)*/

  function validator (a,b){
    if(typeof a!=="number"||typeof b !=="number")
    {
      window.alert("uno de los parametros no es un numero")
      return NaN             
    }
    }
  /* e)Convertir la validación del ejercicio 6b) en una función separada y 
  llamarla dentro de la función suma probando que todo siga funcionando igual.*/

function validateInteger (a){
  
  if (Number.isInteger(a)===true){
    return true
  }else return false
}
console.log(validateInteger(6))
/* c) /*Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero*/