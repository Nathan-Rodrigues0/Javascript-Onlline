const p_array = document.querySelector("#array")
const txt_search = document.querySelector("#txt_search")
const btnSearch = document.querySelector("#btnSearch")
const result = document.querySelector("#result")

//montando um array numérico
const element_array = ["html", "css", "Javascript", "c++", "python"]
p_array.innerHTML = "[" + element_array + "]"

btnSearch.addEventListener("click",(evt)=>{
    result.innerHTML = "Valor não encontrado"
    const ret = element_array.find((el,i)=>{
        if(el.toUpperCase() == txt_search.value.toUpperCase()){
            result.innerHTML = "Valor encontrado: " + el + " na posição: " + i
            return el
        }
    })
    console.log(ret)
})
