// LOGICA DE JS EN NODE

//DECLARACION DE VARIABLES
let username = 'octavio'
let age = 19
let hasHobbies = true
let points = [10,11,20,2]
let user = {
    name : 'Haziel',
    lastname : 'Estarda'
}  

//EN GENERAL LA LOGICA DE JS SE PUEDE OCUAPR EN NODE

//VARIABLES CONSTANTES
const PI = 3.1416 

// //MOSTRANDO LAS VARIABLES Y CONSTANTES
console.log(username)
console.log(age)
console.log(points)
console.log(user)
console.log(PI)



//CONDICIONALES
ageUser = 19

if(ageUser >= 18){
    console.log('ES MAYOR DE EDAD')
}
else{
    console.log('ES MENOR DE EDAD')
}


//BUCLES
const name = ['Haziel','Jesus','Briones','Jaime'];

for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}


//FUNCIONES
function showInfo(userName, Age){
    return console.log(`INFO DEL USUARIO \nNOMBRE DEL USUARIO: ${userName} \nEDAD: ${Age}`)
}

showInfo('Octavio', 19)


//FUNCIONES FLECHA
const showInfo2 = (userName, Age) => console.log(`INFO DEL USUARIO \nNOMBRE DEL USUARIO: ${userName} \nEDAD: ${Age}`)

showInfo2('Haziel', 18)