//criando constantes para os tres elementos principais da página
const array = document.querySelector("#array")
const reduce = document.querySelector("#btnReduce")
const result = document.querySelector("#result")

//criando um elemento que recebe o array
const el_array = [1,2,3,4,5]
array.innerHTML = "[" + el_array + "]"
let ant = []

//criando um evento ao clicar no botão reduce
reduce.addEventListener("click",(evt)=>{
    //escrevendo uma função com o método REDUCE
    result.innerHTML = el_array.reduce((previous,current,position)=>{
        ant.push(previous)
        //retornando o valor atual + valor anterior
        return current + previous
    })
})

// const array = document.querySelector("#array")
// const btnReduce = document.querySelector("#btnReduce")
// const result = document.querySelector("#result")

// const el_array = [1,2,3,4,5]
// let ant = []
// let atu = []

// array.innerHTML = "[" + el_array + "]"

// btnReduce.addEventListener("click",(evt)=>{
//     result.innerHTML = el_array.reduce((previous,current,position)=>{
//         ant.push(previous)
//         atu.push(current)
//         return current + previous
//     })
//     result.innerHTML+="<br/> Valor anterior: "+ant+"<br/> Vallor atual: "+atu
// })