
const converterInt=(e)=>parseInt(e)
const dobrar = (e) => e*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)

// const el=document.getElementsByTagName("div")//outra forma de usar um object, operando os elementos
// const val=Array.prototype.map.call(el, ({innerHTML})=>innerHTML) // 3 forma
// console.log(val)

// let el = [...document.getElementsByTagName("div")] // 2 forma
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="Nathan"
// })

// const cursos=['HTML','CSS','Javacript','PHP','React'] // 1 forma
// let c = cursos.map((el,i)=> {
//     return el
//     //return "<div>"+el+"</div>"
//     //console.log("Curso: " + el + " - Posição do curso: " + i)
// })
// console.log(c)