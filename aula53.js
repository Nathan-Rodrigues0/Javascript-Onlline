let valores = [1,4,3]

const op = [
    (val)=>{
        let res = 0
        for(v of val){
            res += v
        }
        return res
    },
    (val)=>{
        let res = 1
        for(v of val){
            res *= v
        }
        return res
    },
    (val)=>{
        let res = 0
        for(v of val){
            console.log(v)
        }
        return res
    }
]
console.log(op[1](valores))


// let valores = [1,2,3]
// const op = [
//     (val)=>{
//         let res = 0
//         for(v of val){
//             res+=v
//         }
//         return res
//     },
//     (val)=>{ //função de multiplicação
//         let res = 1
//         for(v of val){
//             res*=v
//         }
//         return res
//     },
//     (val)=>{//função para imprimir os elementos da c0leção
//         let res = 0
//         for(v of val){
//             console.log(v)
//         }
//         return res
//     }
// ]

// console.log(op[1](valores))
// //ou
// op[2](valores)