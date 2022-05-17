function calcularFizzBuzz(valor){
     
    const divisible3 = Number.isInteger(valor/3);
    const divisible5 = Number.isInteger(valor/5);
    
    if(divisible3 && divisible5){
        return "fizz Buzz" 

    }

    if(divisible3){
        return "fizz"
    }

    if(divisible5){
        return "Buzz"
    }


    return valor

}


function repetir(n){
    
    let nVeces = n

    for(let i = 0; i <= nVeces ; i++){
        console.log(calcularFizzBuzz(i))
    
    }
}

repetir(10)



//ejercicio funciones calculadora

function sumar(a,b){
    const suma = a + b

    return suma
}

function restar(a,b){
    const resta = a - b

    return resta
}

function dividir(a,b){
    const division = a / b

    return division
}

function multiplicar(a,b){
    const multiplicacion = a * b

    return multiplicacion
}


let operacion = (dividir((sumar((multiplicar(4,3)),(multiplicar(6,8)))),4))

console.log(operacion)

//sumatoria de n= 

function sumar(a,b){
    
    let x = a + b
    return x

}


function sumatoria(n){

    let nVeces = n
    let acumulado = 0 

    for(let i = 0; i <= nVeces ; i++){
        const nuevoResult = acumulado + i
        acumulado = nuevoResult
    
    }

    console.log(acumulado)
    
}

sumatoria(10)
