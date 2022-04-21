const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const select = document.querySelector('#aplicacion')
const calcular = document.querySelector('.calcular')
const resultado = document.querySelector('#resultado')

function operacion (){
    const x = Number(numero1.value)
    const y = Number(numero2.value)

    const queHacer = select.value

    let resul  

    if(queHacer === 'sum'){
        resul = x + y
        
    }

    if(queHacer === 'res'){
        resul = x - y 
    }

    if(queHacer === 'mul'){
        resul = x * y
    }

    resultado.textContent = resul

    
}

calcular.addEventListener('click',operacion)