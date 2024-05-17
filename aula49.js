const array = document.querySelector("#array")
const verify = document.querySelector("#btnVerify")
const result = document.querySelector("#result")

const el_array = [12,13,17,10,5,19]
array.innerHTML = "[" + el_array + "]"

verify.addEventListener("click",(evt)=>{
    const res = el_array.some((e,i)=>{
        if(e<=18){
            result.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if(res){
        result.innerHTML = "OK!"
    }
})
