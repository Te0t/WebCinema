/*let nombres=["Harley","Elver","Karolg","Yankee","Maluma"]

//escribir un ciclo que repita una accion
//el for repite algo hasta que se cumpla 
// el auxiliar lo podemos representar con la letra i el cual actua como un contador que va desde la posicion 0 hasta la 5

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}

//forma de reescribir un ciclo for con js
nombres.forEach(function(auxiliar){
    console.log(auxiliar)})

//ejemplo

/*let comidas = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar'];
comidas.forEach(function(comida, index) {
    console.log(`${index} : ${comida}`);
});

let numeros=[1,2,3,4,5,6,7,8,9,10]

numeros.forEach(function(numero, index){
    console.log(index, numero + 10);
})

let salarios=[3500000,5000000,8000000]

salarios.forEach(function(salario, index){
    console.log(index, salario-(salario*19/100));
})*/

//Array metodos para recorrer un arreglo y poder sacar sus datos
let calificaciones=[3.5,4,2,1.5,3]
let suma= 0

calificaciones.forEach(function(calificacion, index){
    suma=suma + calificacion
})
console.log('nota final ' + suma/calificaciones.length)