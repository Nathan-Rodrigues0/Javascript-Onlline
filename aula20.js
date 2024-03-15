function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    let but = document.getElementById("but")
    let caixa = document.getElementById("caixa")
    
    d1.style.fontFamily = "Arial"
    d2.style.fontFamily = "Arial"
    d3.style.fontFamily = "Arial Black"

    d2.style.fontWeight = "bold"
    d3.style.fontWeight = "bolder"

    but.style.backgroundColor = "red"
    but.style.color = "white"
    but.style.margin = "20px"
    but.style.scale = "1.3"

    caixa.style.padding = "20px"
    caixa.style.border = "black 3px solid"
    caixa.s
}

function soma(){
    let n1 =5
    let n2 =5
    let tot = n1+n2
    console.log(tot)
}

for (let i = 0; i < 10; i++){
    soma()
}




/*function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML="Kingn"
    d2.innerHTML="Kingn"
    d3.innerHTML="Kingn"

    d2.style.backgroundColor = "lightblue"
    d3.style.backgroundColor = "orange"
}
/*function soma(){
    let n1 =2
    let n2 = 10
    let tot=n1+n2
    console.log(tot)
}

for (let i=0; i<10 ; i++){
    soma()
}*/