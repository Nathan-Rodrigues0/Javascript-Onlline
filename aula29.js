function aluno(nome,nota){
    this.nome = nome
    this.nota = nota
    this.dados = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}
console.log('Nathan',10)

// function work(name,working,old){
//     this.name = name//this = é para distinguir o elemento do outro. ex: this.isso != isso
//     this.working = working
//     this.old = old
//     console.log("Tem um jovem, que se chama " +(name) + " que com " + old + " anos já vai ser " + (working))
// }
// work("Nathan","Programador web",18)

// function aluno(nome,nota){
//     this.nota = nota
//     this.nome = nome 
    
//     this.dados_anonimo=function(){
//         setTimeout(()=>{ //não esquecer de usar o Arrow Function / ele nao usa o contexto de uma nova variavel a partir do Timeout
//             console.log(this.nome)
//             console.log(this.nota)
//         },2000)
//     }
// }
// const aluno1 = new aluno("Nathan",100)
// aluno1.dados_anonimo()