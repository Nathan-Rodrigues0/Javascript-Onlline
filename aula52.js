const box = document.querySelector("#box")

let cursos = ["HTML","Javascript","CSS"] // um [array] com strings

cursos[1]="C++" // alterando a segunda posição do array [cursos]

cursos.unshift("Python") // adiciona o elemento no ínicio do array [cursos]

cursos.shift() // remove o primeiro elemento do array [cursos]

//*cursos.push("Python") // adicionando elemento no final do array [cursos]

//*cursos.pop() // remove o último elemento do array [cursos]

console.log(cursos[1])//[] = posição do elemento dentro do array

cursos.map((el)=>{//percorrendo o elemento curso e dando uma funcionalidade
    let p = document.createElement("p")//criando um parágrafo
    p.innerHTML = el
    box.appendChild(p)//adicionando o conteúdo do [curso] para a constante #box
})
