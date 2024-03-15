const soma=val=>{
    let res = 0
    for(v of val)
    res+=v
    return res
}

const active=(...valores)=>{
    return soma(valores)
}

valor = [10,50,40,100,800]
console.log(active(...valor))

 /*const somar=val=>{ //valores (val) sem estar no parentese
        let res = 0
        for(v of val)
            res+=v
            return res
    }
    const soma=(...valores) =>{
        return somar(valores)
}

valor = [10,2,5,6,2]
console.log(soma(...valor))//expalhando o array*/