const array = document.querySelector("#array")
const verify = document.querySelector("#btnVerify")
const result = document.querySelector("#result")

const el_array = [12,23,34,25,65]
array.innerHTML = "[" + el_array + "]"

verify.addEventListener("click", (evt)=>{
    const res = el_array.some((e,i)=>{
        if(e <= 18){
            result.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if(res){
        result.innerHTML = "OK!"
    }
})

// //criando constantes das tres div no HTML
// const array = document.querySelector("#array")
// const verify = document.querySelector("#btnVerify")
// const result = document.querySelector("#result")

// //criando um array
// const el_array = [12,13,17,10,5,19]
// array.innerHTML = "[" + el_array + "]"

// //criando um evento de click
// verify.addEventListener("click",(evt)=>{
//     //método SOME para verificar alguns elementos do array e retornar que está conforme ou não
//     const res = el_array.some((e,i)=>{
//         if(e<=18){
//             result.innerHTML = "Array não conforme na posição " + i
//         }
//         return e >= 18
//     })
//     if(res){
//         result.innerHTML = "OK!"
//     }
// })
