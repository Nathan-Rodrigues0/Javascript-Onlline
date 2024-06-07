const valores = [12,13,16]
const it_valores = valores[Symbol.iterator]()

console.log(valores)
console.log("Primeiro elemento: " + it_valores.next().value)
console.log("Segundo elemento: " + it_valores.next().value)
console.log("Terçeiro elemento: " + it_valores.next().value)
console.log(it_valores.next().value + " = Os elementos dessa coleção acabarão!")

const text = ["Pizza","Hambúguer","Pastel"]
const it_text = text[Symbol.iterator]()

console.log(text)
console.log("Primeiro elemento: " + it_text.next().value)
console.log("Segundo elemento: " + it_text.next().value)
console.log("Terçeiro elemento: " + it_text.next().value)
console.log(it_text.next().value + " = Os elementos dessa coleção acabarão!")