let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
isAtivo= 1
console.log(!isAtivo) //porta logica "!! e !

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!! [])
console.log(!!{})
console.log(!! (isAtivo = true))

console.log("Os falsos...")

console.log(!!0) 
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
 
console.log("Pra finalizar...")

console.log(!!(""|| null|| 0|| " ")) // | é igual a: ou.

let nome = 'abacate'

console.log(nome || " ") // console.log(nome *se ele colocar* || *ou* se nao colocar ('desconhecido'))