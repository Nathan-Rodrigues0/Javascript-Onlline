const caixa = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]
const curso = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

curso.map((el,chave)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+chave)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el
    newElement.style.backgroundColor = "#ddff"
    caixa.appendChild(newElement)

    const lixo = document.createElement("img")
    lixo.setAttribute("src","./icone-lixo.png")
    lixo.setAttribute("class","lixeira")
    newElement.appendChild(lixo)

    lixo.addEventListener("click",(evt)=>{
        caixa.removeChild(evt.target.parentNode)
    })
})

// curso.map((el,chave)=>{
//     const newElement = document.createElement("div")
//     newElement.setAttribute("id","c"+chave)
//     newElement.setAttribute("class","curso c1")
//     newElement.innerHTML=el
//     newElement.style.backgroundColor = "lightgreen"

//     const lixeira = document.createElement("img")
//     lixeira.setAttribute("src","./icone-lixo.png")
//     lixeira.setAttribute("class","lixeira")
    
//     lixeira.addEventListener("click",(evt)=>{
//         caixa.removeChild(evt.target.parentNode)//removendo o elemento (evt) e o pai deste elemento que foi clicado
//     })

//     newElement.appendChild(lixeira)
//     caixa.appendChild(newElement)
// })