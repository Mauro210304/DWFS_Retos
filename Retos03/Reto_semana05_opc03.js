let total = +prompt("Ingresa la cantidad de productos")

let cantToner=0
let cantCabezal=0
let cantTinta=0
let cantidad
let tot=0

while (tot<total) {
    
    let tipoProducto = +prompt("Selecciona el tipo de producto (1,2 o 3)")
    
    if(tipoProducto>0 && tipoProducto<4){
        alert(`Quedan ${total-tot} productos`)
        if(tipoProducto===1){
            cantidad = +prompt("Ingresa cantidad de Toner")
            cantToner +=cantidad
        }
        else if(tipoProducto===2){
            cantidad = +prompt("Ingresa cantidad de Cabezal")
            cantCabezal +=cantidad
        }else{
            cantidad = +prompt("Ingresa cantidad de Tinta")
            cantTinta +=cantidad
        }
        tot+=cantidad
    }

}

console.log(`"Hay ${cantToner} toner(s)"`)
console.log(`"Hay ${cantCabezal} Cabezal(es)"`)
console.log(`"Hay ${cantTinta} Tinta(s)"`)