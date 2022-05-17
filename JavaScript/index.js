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

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; // tenemos nuestro array

function saludarEstudiantes(estudiante){
    console.log( `Hola, ${estudiante}`);
}//la funcion que va a hacer la tarea

//for, siempre hay que inicializar con una variable i

//mientras la variable i sea menor a la longitud completa de nuestro array de estudiantes, se va aumentar en 1 numero
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}//mandamos a llamar la funcion tarea

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


//Objeto 
//var miAuto{}, lo que hay por dentro de los corchetes son las propiedades del objeto

//ejemplo de objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};


//acceder a mi propiedad del objeto
miAuto.modelo
'Corolla'

//metodo de un objeto 

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo}${this.annio}`); //este string se usa para hacer una concatenación de dos varibales
    }
};

//se llamma asi 
miAuto.detalleDelAuto();
// y retorna
Auto Corolla 2020


//funcion constructora

// se usa una funcion, que va a tener como parametro las propiedades de mi objeto

function auto(marca,modelo,annio){
    //como se van a armar las propiedades que quiero que tenga mi objeto, usando this que hace referencia a mi funcion constructora
    this.marca = "marca";  
    this.modelo = "modelo";
    this.annio = "annio";
}

//generar un objeto nuevo con relacion al templeit anterior, usando un nuevo operador de nombre new (que va a generar una nueva instancia, es decir qgenera un objeto de otro objeto)

const autoNuevo = new auto("tesla", "model 3", "2020") // dentro se poner las propiedades que deseamos que tenga este nuevo objeto.

//se pueden agregar varios objetos nuevos declarando variables 
const autoNuevo2 = new auto("tesla", "model x", "2018") 
const autoNuevo3 = new auto("toyota", "corolla", "2020") 


//Metodos de recorrido de Arrays


//array con diferentes objetos adentro: una lista de articulos (objetos) con propiedades (nombre y costo)
const articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 500},
    { nombre: "audifonos", costo: 1700},
];


// metodo filter, adentro del metodo hay que declarar una function,

const articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 
    //el fintro agrega a un nuevo array lo que le estamos diciendo que filtre
});  

//Se llama
articulosFiltrados



// El segundo método: map, va a generar un nuevo array y me ayuda a mapear, usanfo el mismo array 
//maqpea todo el contenido del array 

const nombreArticulos = articulos.map(function(articulo){
       return articulo.nombre 
});

//lo llamamos y me a tarer lo que le solicite solo los nombres del contenido del array

nombreArticulos



//otro: find va a buscar lo que le pidamos , que sea estrictamente igual, en un nuevo array , si no lo encuentra no regresa nada ... trabajamos con el mismo array principal 

const encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//:forEach(), no me genera un nuevo Array por lo que debo llamar primero mi array
//adentro del forEach como metodo, generamos la funcion, y como parametro el articulo que queremos que nojs traiga

// en este caso solo los nombres de los articulos que estan dentro del array
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// y me va a regresar un listado con los nombres de los articulo dentro del array


//Otro método: some(), valida true o false, regresandonos lo que le indicquemos, lo regresa en un nuevo array

//lo unico que nos regresa es un true, si existe lo que le estamos pidiedno

const articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

//llamamos
articulos

//nos regresa 
true

//otro método: push()

//Array incial
let numArray = [1, 2, 3, 4, 5]
//declaramos la función
function newNum(){
    //agregamos elementos a la función 
    numArray.push(6, 7)
    //revisamos el array con los elementos nuevos agregados
    console.log(numArray)
}
//ejecución función
newNum()
//nos regresa
(7) [1, 2, 3, 4, 5, 6, 7]



//otro método: shift(), elimina el primer elemento del array


let numArray = [1, 2, 3, 4, 5]
    console.log(numArray)

let shiftNumArray = numArray.shift()

console.log(numArray)
(5) [1, 2, 3, 4, 5]
(4) [2, 3, 4, 5]


//otro método: pop(), elimina el ultimo elemento del array




