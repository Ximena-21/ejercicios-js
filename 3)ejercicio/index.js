const btnCalcular = document.querySelector('.cal')
const tuPeso = document.querySelector('#peso')
const select = document.querySelector('#planet')
const txtResult = document.querySelector('.resultado') 
const graLuna = 1.62
const graJupiter = 24.79
const graMarte = 3.72
const graTierra = 9.81

function calcularPeso (){

   const pesoT = Number(tuPeso.value)

    let resultado

   if(select.value === 'luna'){
       resultado = (pesoT/graTierra)*graLuna
   }

   if(select.value === 'marte'){
        resultado = (pesoT/graTierra)*graMarte
    
    }

    if(select.value === 'jupiter'){
        resultado = (pesoT/graTierra)*graJupiter
        // resultado = x(pesoT,graTierra,graJupiter)
    }

    txtResult.textContent = resultado

}

// function x(pesoT,gravedad1,gravedad2){
//    const result =  (pesoT/gravedad1) * gravedad2
//    return result
// }


btnCalcular.addEventListener('click', calcularPeso)
