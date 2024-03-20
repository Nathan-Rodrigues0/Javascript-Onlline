const caixa = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]
const curso = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]//criando elemento array só no Javascript

curso.map((el,chave)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+chave)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML=el
    newElement.style.backgroundColor = "lightgreen"
    caixa.appendChild(newElement)
})

// curso.map((el,chave)=>{
//     const newElement = document.createElement("div")//createElement  = criando um elemento ("div")
//     newElement.setAttribute("id","c"+chave) // criando um atributo e valor / "atributo = id" - "valor = c7" / chave = para gerenciar um id - uma identificação de um elemento
//     newElement.setAttribute("class","curso c1")
//     newElement.innerHTML = el //array lá de cima
//     caixa.appendChild(newElement) // usando o método appendChild = Anexando o elemento (newElement = "div") na página HTML
// })

