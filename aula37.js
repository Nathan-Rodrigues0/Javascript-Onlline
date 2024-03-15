const caixa = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]

caixa.addEventListener("click",()=>{
    console.log("Já Ciclou!")
})

cursos.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        evento.stopPropagation()
    })
})

// const caixa1 = document.querySelector("#caixa1")
// const cursos = [...document.querySelectorAll(".curso")]

// caixa1.addEventListener("click",()=>{
//     console.log("clicou")
// })

// cursos.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         evt.stopPropagation()//stopPropagation => parando o evento dentro de um elemento
//     })
// })
