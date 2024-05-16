const array = document.querySelector("#array")
const verify = document.querySelector("#btnVerify")
const result = document.querySelector("#result")

const el_array = [18,24,30,65,47,90]
array.innerHTML = "[" + el_array + "]"

verify.addEventListener("click",(evt)=>{
    const res = el_array.every((e,i)=>{
        if(e<=18){
            result.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if(res){
        result.innerHTML = "OK!"
    }
})

// //criando constantes
// const p_array = document.querySelector("#array")
// const btnVerify = document.querySelector("#btnVerify")
// const result = document.querySelector("#result")

// //criando array
// const element_array = [42,24,53,43,35,89]
// p_array.innerHTML = "[" + element_array + "]"

// //criando um evento de click
// btnVerify.addEventListener("click",(evt)=>{
//     //criando um elemento que verifica todos os elemento do array
//     const ret = element_array.every((e,i)=>{
//         if(e<18){
//             result.innerHTML = "Array não conforme na posição " + i
//         }
//         return e>=18
//     })
//     if(ret){
//         result.innerHTML = "OK"
//     }
// })
