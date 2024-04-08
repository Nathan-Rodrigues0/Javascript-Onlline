const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnSelection = document.getElementById("btnSelection")

cursos.map((el,chave)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+chave)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb =document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    newElement.appendChild(comandos)

    caixaCursos.appendChild(newElement)
})

btnSelection.addEventListener("click",(evt)=>{
    const radious = [...document.querySelectorAll("input[type=radio]")]
    let radiousSelection = radious.filter((el)=>{
        return el.checked
    })
    radiousSelection=radiousSelection[0]
    // const cursoSelection = radiousSelection.parentNode.parentNode.firstChild.textContent // pegando o texto contido < primeiro elemento < pai do elemento < avô do primeiro elemento

    const cursoSelection = radiousSelection.parentNode.parentNode.firstChild.textContent
    alert("Curso selecionado: " + cursoSelection)

    console.log(radious)
    console.log(radiousSelection)
    console.log(cursoSelection)
})