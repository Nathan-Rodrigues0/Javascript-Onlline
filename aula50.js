const array = document.querySelector("#array")
const btnReduce = document.querySelector("#btnReduce")
const result = document.querySelector("#result")

const el_array = [1,2,3,4,5]
let ant = []
let atu = []

array.innerHTML = "[" + el_array + "]"

btnReduce.addEventListener("click",(evt)=>{
    result.innerHTML = el_array.reduce((previous,current,position)=>{
        ant.push(previous)
        atu.push(current)
        return current + previous
    })
    result.innerHTML+="<br/> Valor anterior: "+ant+"<br/> Vallor atual: "+atu
})