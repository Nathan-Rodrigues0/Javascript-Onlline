const caixa = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]

console.log(caixa.childNodes) // filho !text => NodeList
console.log(caixa.children) // filho elemento

console.log(cursos[1].parentElement) // elemento pai

console.log(cursos[3].nextElementSibling) // próximo irmão

console.log(caixa.firstElementChild) // primeiro filho (elemento)

console.log(caixa.lastElementChild) // último filho (elemento)

console.log(caixa.getRootNode()) // documento principal (raiz)

console.log(caixa.ownerDocument) // documento principal (raiz)


// const caixa = document.querySelector("#caixa1")
// const cursos = [...document.querySelectorAll(".curso")]

// console.log(caixa.children)//filhos => HTMLColecction

// console.log(caixa.getRootNode())//documento pai
// console.log(cursos[0].ownerDocument)