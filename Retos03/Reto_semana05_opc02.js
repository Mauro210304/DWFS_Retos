let TI = +prompt("Ingrese el tipo de hamburguesa (1, 2 o 3)");
let PA
let Num

if(TI>3 || TI<1){
    console.log("Ingreso un tipo de hamburguesa desconocido")
}
else
{
    Num = +prompt("Ingrese la cantidad de hamburguesas")

    if(TI===1){
        PA=20
    }
    else if(TI===2){
        PA=25
    }
    else{
        PA=28
    }
}
console.log(Num)
console.log(PA)


let TP = confirm(`Pagara con tarjeta?`)

console.log(TP)
let TO = PA*Num

let TOT

if(TP===true){
    CA=1.05
    TOT = TO*CA
    console.log(`Total con cargo S/ ${TOT}`)
}
else{
    CA=1
    TOT = TO*CA
    console.log(`Total sin cargo S/ ${TO}`)
}







