//LOS TIMERS EN JS SE REFIEREN A LA CAPACIDAD DE PROGRMAR TAREAS PARA QUE SE EJECUTEN EN UN FUTURO

//TENEMOS DOS TIPOS DE FUNCIONES PRINCIPALES
setInterval //EJECUTA UN UN CODIGO CADA CIERTO TIEMPO
setTimeout  //EJECTUTA UN CODIGO DESPUES DE QUE PASE UN TIEMPO 

setInterval(() => {
    console.log('UN EJEMPLO')
}, 2000)    //VA A MOSTRAR EL MENSAJE CADA 2 SEGUNDOS REPETIDAMENTE


setTimeout(() => {
    console.log('OTRO EJEMPLO')
}, 5000)    //DESPUES DE 5 SEGUNDOS MOSTRARA EL MENSAJE Y AHI ACABARA 

