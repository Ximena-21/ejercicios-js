/*se realizo el reto haciendo uso de los condicionales if, else if, else*/

var opt1 = 'tijera';
var opt2 = 'piedra';
var opt3 = 'papel';

function jugar(jugador,pc){

    if ((jugador === opt2 && pc === opt3) 
    || (jugador === opt2 && pc === opt1) 
    || (jugador === opt1 && pc === opt3)) {    
        console.log('Ganaste')
    } else if ((jugador === opt1 && pc === opt1) 
    || (jugador === opt2 && pc === opt2) 
    || (jugador === opt3 && pc === opt3)) {    
        console.log('Empate');
    } else {
        console.log('Perdiste')
    }
};    
console.log(jugar(opt2,opt3))

//reto con el uso de switch

/* var opt1 = 'tijera';
var opt2 = 'piedra';
var opt3 = 'papel';

function jugar(jugador,pc){

    switch (true) {
        case (jugador === pc ):
            console.log('Empate');
            break;
        case ((jugador === opt2 && pc === opt3) || (jugador === opt2 && pc === opt1) || (jugador === opt1 && pc === opt3)): 
            console.log('Ganaste');
            break;
        default:
            console.log('Ganaste');
    }
};    
console.log(jugar(opt2,opt3))
 */


