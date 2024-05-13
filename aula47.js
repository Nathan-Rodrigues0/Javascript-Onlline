//criando constantes
const p_array = document.querySelector("#array")
const txt_search = document.querySelector("#txt_search")
const btnSearch = document.querySelector("#btnSearch")
const result = document.querySelector("#result")

//montando um array numérico
const element_array = ["html", "css", "Javascript", "c++", "python"]
//assossiando essa constante mostrando ela no HTML o element_array
p_array.innerHTML = "[" + element_array + "]"

//criando um evento de click para encontrar o elemento selecionado
btnSearch.addEventListener("click",(evt)=>{
    result.innerHTML = "Valor não encontrado"
    //usando o método FIND 
    const ret = element_array.find((el,i)=>{
        //se o elemento for igual ao elemento, então pesquisa ele e retornará o mesmo elemento pesquisado
        if(el.toUpperCase() == txt_search.value.toUpperCase()){
            result.innerHTML = "Valor encontrado: " + el + " na posição: " + i
            return el
        }
    })
    console.log(ret)
})
