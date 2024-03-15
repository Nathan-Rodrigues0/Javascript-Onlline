const cursos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[0]

console.log(cursos)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursoEspecial)

cursosc2.map((element)=>{
    element.classList.add("destaque")
})