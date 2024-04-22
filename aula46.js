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
    
    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    //crinado um elemento tipo "input" em formato de " ° radio"
    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")
    
    //colocando os elementos em funcionamento devidamente ao ser pai (parent)
    comandos.appendChild(rb)
    newElement.appendChild(comandos)
    return newElement
}

//criando uma função .map() para mapear a const cursos e criar os elementos
cursos.map((el,chave)=>{
    //criando um elemento que recebe uma função e mapea o elemento dela
    const newElement = createNewCurso(el)
    caixaCursos.appendChild(newElement)
    //alterando e aumentando a posição do indice
    indice++
})

    //criando uma constante que tem um arrow function
    const radioSelection = () =>{
        //criando um input com atributo
        const radio = [...document.querySelectorAll("input[type=radio]")]
    
        //criando uma variavel que filtra o elmento anterior e retorna o elemento checkado
        const radioSelection = radio.filter((el)=>{
            return el.checked
        })
    
        //a variavel recebe ela na primeira posição
        return radioSelection[0]
    }

    //criando um evento de click no elemento (btnSelection)
    btnSelection.addEventListener("click",(evt)=>{

        const rs =radioSelection()
        try{//try == if / catch == else
            //criando um elemento que recebe a posição da variavel < o pai dela < avô < primeiro elemento filho < e o texto contido dentro desse elemento
            const cursoSelection = rs.parentNode.parentNode.firstChild.textContent
            alert("Curso selecionado: " + cursoSelection)
        }catch(ex){
            alert("Selecione um curso")
        }
    })

    //criando um evento que tem uma função if e else que preocura retornar o elemento removido
    btnRemoved.addEventListener("click",(evt)=>{
        const rs = radioSelection()
        //preocura que o elemento rs esteja diferente que indefinido
        if(rs!=undefined){
            const cursoSelection = rs.parentNode.parentNode
            cursoSelection.remove()
        }else{
            alert("Selecione um curso")
        }
    })

    //adicionamdo um evento nesse botão
btnAddBefore.addEventListener("click",(evt)=>{
    const rs = radioSelection()
    try{
        if(nameCurso.value!=""){
            const cursoSelection = rs.parentNode.parentNode
            const newCurso = createNewCurso(nameCurso.value)
            //.insertBefore = adicionando  o newCurso antes do cursoSelection
            caixaCursos.insertBefore(newCurso,cursoSelection)
        }else{
            alert("Digite o nome do curso!")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAddAfter.addEventListener("click",(evt)=>{
    const rs = radioSelection()
    try{
        if(nameCurso.value!=""){
            const cursoSelection = rs.parentNode.parentNode
            const newCurso = createNewCurso(nameCurso.value)
            caixaCursos.insertBefore(newCurso,cursoSelection.nextSibling)
        }else{
            alert("Digite o nome do curso!")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})
