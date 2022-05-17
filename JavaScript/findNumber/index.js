//lista de elemernto ex: [1,2,5,2,56,3,5,"juan", "paula", "sofia", "sofia", "isa"]
//encuentre cuantas veces se repite un elemento dentro de la lista

//una funcion que me diga cuantas veces aparece un elemento dentro de la lista, 

//me retorne en resultado ex: 
// 5 -> 2
// 3 -> 1
// sofia -> 2



const elements = []


function findRepeat(array){

const enumerate = {}

    array.forEach(function(element) {
    if (enumerate[element]) {
       enumerate[element] +=1
       return
    }
    enumerate[element] = 1
    })

    for (let item in enumerate){
        if (enumerate[item] >=2){
            console.log( item + " ---> " +  enumerate[item] )
        }
    }

}

findRepeat([1,2,5,"sofia", 2,56,3,5,"juan", "paula", "sofia", "isa"])

/* 
let list = [1,2,5,"sofia", 2,56,3,5,"juan", "paula", "sofia", "isa"]

function find(){
    
    list.forEach(function(list, index, array){
        console.log(list)
    })

}
 */

const list = []



function findRepeat(array){
const count = {}
const result = []


const findElement = list.find(function(x){
    return let find = x
});


array.forEach(element => {
    if (count[element]) {
       count[element] +=1
       return
    }
    count[element] = 1
})

for (let item in count){
    if (count[item] >=2){
       console.log( item + " ---> " +  count[item] + )
    }
}

}

//intento que me encuentre un valor en un array
const listado = [1,2,5,"sofia", 2,56,3,5,"juan", "paula", "sofia", "isa"];


function encontrar(item) {
    return item.value === "sofia";

}


console.log(listado.find(encontrar));