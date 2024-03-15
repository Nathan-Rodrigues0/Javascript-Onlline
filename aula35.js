const caixa1 =document.querySelector("#parte-1")
const caixa2 = document.querySelector("#parte-2")
const btn = document.querySelector("#botão")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const e = evt.target
        e.classList.toggle("destaque")
    })
})

btn.addEventListener("click",()=>{
    const selection = [...document.querySelectorAll(".curso:not(.destaque)")]
    selection.map((evt)=>{
        caixa1.appendChild(evt)
    })
    const selection2 = [...document.querySelectorAll(".destaque")]
    selection2.map((evt)=>{
        caixa2.appendChild(evt)
    })
})

// const caixa1 = document.querySelector("#parte-1")
// const caixa2 = document.querySelector("#parte-2")
// const btn = document.querySelector("#botão")
// const btn2 = document.querySelector("#botão2")
// const cursos = [...document.querySelectorAll(".curso")]

// cursos.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const curso = evt.target
//         curso.classList.toggle("destaque")
//     })
// })

// btn.addEventListener("click",()=>{
//     const selection = [...document.querySelectorAll(".destaque")]
//     selection.map((el)=>{
//         caixa2.appendChild(el)
//     })
//     const selection2 = [...document.querySelectorAll(".curso:not(.destaque)")]
//     selection2.map((el)=>{
//         caixa1.appendChild(el)
//     })
//})

//método de Button:
// btn2.addEventListener("click",()=>{
//     const selection2 = [...document.querySelectorAll("#parte-2 > .destaque")]
//     selection2.map((el)=>{
//         caixa1.appendChild(el)
//     })
// })
