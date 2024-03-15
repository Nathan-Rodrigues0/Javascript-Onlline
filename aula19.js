let n = 0
let max = 1000

/*while(n<max){
    console.log("Número - " + n)
    if(n>10){
        break
    }
    n++
}*/

for(let i=n; i<max; i++){
    console.log("Número - " + i)
    if(i%2 == 0){
        i++
        if(i>50){
            break
        }
    }    
}

console.log("Fim do programa")