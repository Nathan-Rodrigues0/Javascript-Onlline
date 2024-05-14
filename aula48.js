const p_array = document.querySelector("#array")
const btnVerify = document.querySelector("#btnVerify")
const result = document.querySelector("#result")

const element_array = [42,24,53,43,35,89]
p_array.innerHTML = "[" + element_array + "]"

btnVerify.addEventListener("click",(evt)=>{
    const ret = element_array.every((e,i)=>{
        if(e<18){
            result.innerHTML = "Array não conforme na posição " + i
        }
        return e>=18
    })
    if(ret){
        result.innerHTML = "OK"
    }
})
