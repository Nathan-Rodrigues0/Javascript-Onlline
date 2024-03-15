function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>10)
        break
    }
}
const res = contador()
for(let c of res)
   console.log(c)

/*function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const res=perguntas()
console.log(res.next().value)
console.log(res.next('Nathan').value)
console.log(res.next('Estudar').value)*/

/*function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const painel=cores()
console.log(painel.next().value)
console.log(painel.next().value)
console.log(painel.next().value)*/