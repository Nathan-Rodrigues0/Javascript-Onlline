
function som(...valores){ //deixando a função mais simples
    let res = 0
    for (let v of valores){
        res+=v 
    }
    return res
}
 console.log(som(20, 20, 27))

function soma(...valores){
    let tam = valores.length
    let res=0
    for (let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}

console.log(soma(5, 10, 5))