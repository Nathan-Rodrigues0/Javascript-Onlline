const caixa = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]

console.log(cursos[0].hasChildNodes())

console.log(cursos[0].children.length > 0 ? "Possui filho" : "Não possui filho")

if(caixa.children.length > 0){
    console.log("Possui filho")
}else{
    console.log("Não possui filho")
}

cursos[2].innerHTML = "TESTE"

// console.log(cursos[0].hasChildNodes())//elemento possui filho? => volta (true) or (false) em NodeList / cursos[0] [] => posição em HTMLCollection

// if(cursos[0].children.length > 0){ //função if e else
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }

// console.log(caixa.children.length > 0 ? "Tem filhos" : "Não tem filhos") //função if e else SIMPLIFICADA!

// caixa.firstElementChild.innerHTML = "TESTE"
// caixa.children[3].innerHTML = "TESTE 2"