//funciones

function sumar (a,b) {
    var resultado = a + b; //se declara en variable para en un futuro poderla usar 
    return resultado; //palabra reservada para regrresar informacion, para decirle q me regrese el resultado de la variable resultado
}

// existen funciones declarativas(la de arriba) y funciones d eexpresion la cual se declara toda dentro de una varible

//funcion declarativa 

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

// funcion de expresion

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);

//A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.


// condicionales 


/* if (true) {
    console.log("Hola")
} else if (){
    console.log("soy falso")
} else {
} */

//ejercicio de condicionales 

/* var edad = 18;

if (edad === 18) {
    console.log("Puedes votar sera tu 1ra votacion");
} else if (edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
} */

//operador ternario, originar el if y el else en una sola linea 

/* condition ? true : false ;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "no, no soy uno" */

//switch

var numero = 1;

switch (numero){
    case 1:
        console.log('Soy uno');
        break;
    case 10: 
        console.log('soy un 10');
        break;
    case 100: 
        console.log('Soy un 100')
        break;
    default:
        console.log('No soy nada')
}


//Arrays

var frutas = ["Manzana","Pera","Cereza","Fresa"]

//para acceder

console.log(frutas)

//para agregar mas elementos dentro del array .push

var masFrutas = frutas.push("Uvas");

//para borrar un elemnto del array  .pop

var ultimo = frutas.pop("Uvas")

//para agregar un elemento al inicio del array .unshift

var nuevaLongitud = frutas.unshift("Piña")

//borrar el primer elemento del array .shift

var borrarFruta = frutas.shift("")

//saber la posicion dentro del array

var posicion = frutas.indexOf("Cereza")



//Loops

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log( `Hola, ${estudiante}`);
}

//for, siempre hay que inicializar con una variable i

//mientras la variable i sea menor a la longitud completa de nuestro array de estudiantes, se va aumentar en 1 numero
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

//for of 

//inicializar una variable en singular de nuestro array que esta en plural
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiantes);
}


//While

//mientras la longitud del array sea mayor a 0, lo que este adentro del while va a pasar
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //shift, metodo de mutacion que saca ellementos
    saludarEstudiantes(estudiante);
}
