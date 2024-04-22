//criando e definindo elementos do HTML para o JS

const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","React Native"]//function map()
const btnSelection = document.getElementById("btnSelection")
const btnRemoved = document.getElementById("btnRemoved")
const btnAddBefore = document.getElementById("btnAddBefore")
const btnAddAfter = document.getElementById("btnAddAfter")
const nameCurso = document.getElementById("nomeCurso")

let indice = 0 //esssa variavel vai dar a posição do elemento e id

const throwSelection=()=>{
    const cursosSelection=[...document.querySelectorAll(".selecionado")]
    cursosSelection.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const createNewCurso=(curso)=>{
    //criando e dando atributos em um novo elemento (div) só no JS
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+indice)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = curso
    newElement.addEventListener("click",(evt)=>{
        throwSelection()
        evt.target.classList.toggle("selecionado")
    })
    return newElement
}

//criando uma função .map() para mapear a const cursos e criar os elementos
cursos.map((el)=>{
    //criando um elemento que recebe uma função e mapea o elemento dela
    const newElement = createNewCurso(el)
    caixaCursos.appendChild(newElement)
    //alterando e aumentando a posição do indice
    indice++
})

    //criando uma constante que tem um arrow function
    const cursoSelection = () =>{
        const cursosSelection = [...document.querySelectorAll(".selecionado")]
        //a variavel recebe ela na primeira posição
        return cursosSelection[0]
    }

    //criando um evento de click no elemento (btnSelection)
    btnSelection.addEventListener("click",(evt)=>{
        try{
            alert("Curso selecionado: " + cursoSelection().innerHTML)
        }catch(ex){
            alert("Selecione um curso")
        }
    })

    //criando um evento que tem uma função if e else que preocura retornar o elemento removido
    btnRemoved.addEventListener("click",(evt)=>{
        //preocura que o elemento rs esteja diferente que indefinido
        if(cursoSelection()!=undefined){
            cursoSelection().remove()
        }else{
            alert("Selecione um curso")
        }
    })

    //adicionamdo um evento nesse botão
btnAddBefore.addEventListener("click",(evt)=>{
    try{
        if(nameCurso.value!=""){
            const newCurso = createNewCurso(nameCurso.value)
            //.insertBefore = adicionando  o newCurso antes do cursoSelection
            caixaCursos.insertBefore(newCurso,cursoSelection())
        }else{
            alert("Digite o nome do curso!")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAddAfter.addEventListener("click",(evt)=>{
    try{
        if(nameCurso.value!=""){
            const newCurso = createNewCurso(nameCurso.value)
            caixaCursos.insertBefore(newCurso,cursoSelection().nextSibling)
        }else{
            alert("Digite o nome do curso!")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})
