const idades = [12,5,13,46,23,18,16,32,67,98]

const maior = idades.filter((v,p,a)=>{
    if(v >= 18 & v < 65){
        return v
    }
})

const menor = idades.filter((v,p,a)=>{
    if(v < 18){
        return v
    }
})

const idosos = idades.filter((v,p,a)=>{
    if(v >= 65){
        return v
    }
})

console.log(idades)
console.log("Idades maiores: [" + maior + "]")
console.log("Idades menores: [" + menor + "]")
console.log("Idades de idosos [" + idosos + "]")

// const idades = [13,23,43,65,23,14,56]
// const maior = idades.filter((v,p,a)=>{
//     if(v >= 18){
//         return v
//     }
// })
// //const maior = idade.filter((v,p,a)=>{}) (V = valor / P = posição / A = array)
// const menor = idades.filter((v,p,a)=>{
//     if(v <= 18){
//         return v
//     }
// })


// console.log(idades)
// console.log("Idades maiores [" + maior + "]")
// console.log("Idades maiores [" + menor + "]")