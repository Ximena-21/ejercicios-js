const button1 = document.querySelector(".paintRed")
const button2 = document.querySelector(".paintYellow")
const texto = document.querySelector(".texto")
const claseTextoOriginal = texto.className

function changescolor (color){
    // texto.style.color = color
    texto.className =  claseTextoOriginal + ' ' +  color
}



button1.addEventListener("click", ()=> {
    changescolor('red')
})



button2.addEventListener("click",()=>{
    changescolor('yellow')
} )

