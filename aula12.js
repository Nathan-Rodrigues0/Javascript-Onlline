//usando array: object
// let n1=[10,30,50]

const object= document.getElementsByTagName("div")
const object2= [...document.getElementsByTagName("div")]

object2.forEach(element => {
    element.innerHTML="Nada"
});

console.log(object)
console.log(object2)
