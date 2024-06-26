//criando e definindo elementos do HTML para o JS

const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","React Native"]//function map()
const btnSelection = document.getElementById("btnSelection")
const btnRemoved = document.getElementById("btnRemoved")

//criando uma função .map() para mapear a const cursos e criar os elementos
cursos.map((el,chave)=>{
    //criando e dando atributos em um novo elemento (div) só no JS
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+chave)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    //crinado um elemento tipo "input" em formato de " ° radio"
    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")
    
    //colocando os elementos em funcionamento devidamente ao ser pai (parent)
    comandos.appendChild(rb)
    newElement.appendChild(comandos)
    caixaCursos.appendChild(newElement)
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

    console.log(radio)
    console.log(radiousSelection)
    console.log(cursoSelection)

// const caixaCursos = document.querySelector("#caixaCursos")
// const btn_c = [...document.querySelectorAll(".curso")]
// const c1_2 = document.querySelector("#c1_2")
// const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
// const btnSelection = document.getElementById("btnSelection")

// cursos.map((el,chave)=>{
//     const newElement = document.createElement("div")
//     newElement.setAttribute("id","c"+chave)
//     newElement.setAttribute("class","curso c1")
//     newElement.innerHTML = el

//     const comandos = document.createElement("div")
//     comandos.setAttribute("class", "comandos")

//     const rb =document.createElement("input")
//     rb.setAttribute("type","radio")
//     rb.setAttribute("name","rb_curso")

//     comandos.appendChild(rb)

//     newElement.appendChild(comandos)

//     caixaCursos.appendChild(newElement)
// })

// btnSelection.addEventListener("click",(evt)=>{
//     const radious = [...document.querySelectorAll("input[type=radio]")]
//     let radiousSelection = radious.filter((el)=>{
//         return el.checked
//     })
//     radiousSelection=radiousSelection[0]
//     // const cursoSelection = radiousSelection.parentNode.parentNode.firstChild.textContent // pegando o texto contido < primeiro elemento < pai do elemento < avô do primeiro elemento

//     const cursoSelection = radiousSelection.parentNode.parentNode.firstChild.textContent
//     alert("Curso selecionado: " + cursoSelection)

//     console.log(radious)
//     console.log(radiousSelection)
//     console.log(cursoSelection)
// })