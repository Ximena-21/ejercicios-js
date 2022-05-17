//RETO

//Paso 1: Creamos una lista vacía de autos
const listaAutos = [];

//Paso 2: Creamos la función constructora
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
};

//Paso 3: Creamos una función que agregue un auto nuevo a la lista
function agregarAuto(marca, modelo, anio){
    const nuevoAuto = new auto(marca, modelo, anio);
    listaAutos.push(nuevoAuto);
};

//Paso 4: Creamos una función para que el usuario agregue un nuevo carro con sus parámetros
function registrarAutoNuevo(){
    const marca = prompt("Ingresa la marca: ");
    const modelo = prompt("Ingresa el modelo: ");
    const anio = prompt("Ingresa el año: ");
    agregarAuto(marca, modelo, anio);
    console.log("¡Agregaste tu nuevo carro con éxito!");
};

//Paso 5: ejecutar 
registrarAutoNuevo()

// paso 6: Mostramos el arreglo actualizado
listaAutos;


//otro ejemplo de como hacer la lista alimentada de carros

const car_list = [];

class Car { //uso de clase
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }
}

function make_anew_car() {
    cars = parseInt(prompt("How much cars do you want? type a number."))

    if (typeof cars === "number"){
        for (const i = 0; i < cars; i++){
            brand = prompt("Type the car brand here");
            model = prompt("Type the car model");
            year = parseInt(prompt("Type the year in which the car came out"));
            car_list.push(new Car (brand, model, year));
        }
    }else{
        alert("C'mon brother type a number please");
    }
}

//para llamar a ejecutar
make_anew_car();
console.log(car_list);


//

function car(brand, model, year{
    ´´
}