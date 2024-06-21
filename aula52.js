const box = document.querySelector("#box")

let curso = ["HTML","Javascript","CSS"]

curso.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    box.appendChild(p)
})
