const curso = [...document.querySelectorAll(".curso")]

curso.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target
        el.classList.add("destaque")
    })
})

// const curso = [...document.querySelectorAll(".curso")]

// curso.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const el=evt.target
//         el.classList.add("destaque")
//         console.log(el.id + " foi clicado")
//     })
// })

// function msg(){
//     alert('Clicou')
// }

//c1.addEventListener("click",msg)

// c1.addEventListener("click",()=>{ //com arrow function
//     alert('Clicou')//ou chamar a função msg()
// })

// curso.addEventListener("click",(evt)=>{
//     const el=evt.target //para obter o elemento = target
//     el.classList.add("destaque")
// })