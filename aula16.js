const objs = document.getElementsByTagName("div")
const body = [...document.getElementsByTagName("body")]
const title = [...document.getElementsByTagName("h1")]

body.forEach(caso => {
    caso.style.backgroundColor = "blue"
    caso.style.fontFamily = "Arial"
})
title.forEach(caso => {
    caso.style.color = "white"
    caso.style.textAlign = "center"
    caso.style.marginTop = "50px"
    caso.style.fontSize = "60px"
    caso.style.fontFamily = "Arial"
})


let num=[10,20,30,40,50]

for(o of objs){
    console.log(
        (o.innerHTML = "Caixa")
        &&
        (o.style.backgroundColor = "lightblue")
        &&
        (o.style.textAlign = "center")
        &&
        (o.style.fontSize = "30px")
        &&
        (o.style.width = "300px")
        &&
        (o.style.margin =  "120px auto")
        &&
        (o.style.height = "80px")
        &&
        (o.style.paddingTop = "40px")
        &&
        (o.style.borderRadius = "10px")
        )
}

for(o in objs){
    console.log(objs[o].innerHTML)
}

//for(let i = 0; i < num.length; i++){
//   console.log(num[i])
//}