let randomNub = Math.random(0,1)
console.log(randomNub)
if (randomNub>=0.5){
    window.alert("Greater than 0,5")    
}else {
    window.alert("Lower than 0,5")
}
////////////////////////////////////
let ageDecimal =  Math.random()*100
age = Math.floor(ageDecimal)
console.log(age)

if (age<2){
    window.alert("Bebé")
}else if (age<=12){
    window.alert("Niño")
}else if (age<=19){
    window.alert("Adolescente")
}else if (age<=30){
    window.alert("Joven")
}else if (age<=60){
    window.alert("Adulto")
}else if (age<=75){
    window.alert("Adulto Mayor")
}else ("Anciano")