const div1 = document.getElementById("c1")
const div2 = document.getElementById("c2")

console.log(div1)
console.log(div1.id)
console.log(div1.innerHTML)
div1.innerHTML = "Nathan"
div1.style.color = "red"

console.log(div2)
div2.innerHTML = "Programador"
div2.style.backgroundColor = "lightblue"

const div3 = document.getElementById("c3")
const div4 = document.getElementById("c4")
const div5 = document.getElementById("c5")
const div6 = document.getElementById("c6")

const arrayElement = [div3,div4,div5,div6]

// for(div of arrayElement) //utilizando uma estrutura mais simplificada => .map()
//     div.innerHTML = "Estudando"

arrayElement.map((element)=>{
    element.innerHTML = "Estudando"
    console.log(element)
})

console.log(arrayElement)