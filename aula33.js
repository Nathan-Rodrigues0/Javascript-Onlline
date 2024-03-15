const div = [...document.getElementsByTagName("div")]
const cursos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

const query = [...document.querySelectorAll("div, p")]//somente div com classes[]
const query_curso = [...document.querySelectorAll(".curso")]//elementos .classes

console.log(query)
console.log(query_curso)

// console.log(div)
// console.log(cursos)
// console.log(cursosc1)
// console.log(cursosc2)
// console.log(cursoEspecial)

cursosc2.map((element)=>{
    element.classList.add("destaque")
})

div.map((el)=>{
    el.style.backgroundColor = "lightblue"
})