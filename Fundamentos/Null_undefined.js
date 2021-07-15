let valor /// nao foi inicializada
console.log(valor)
valor =null //ausencia de valor
console.log(valor)
//console.log(vlor.toString()) ERROR
const pproduto ={}
console.log(pproduto.preco)
console.log(pproduto)
 pproduto.preco = 3.40
 console.log(pproduto)

 pproduto.preco = undefined // evitar atribuir undfined
 console.log(!!pproduto.preco)
 // delete produto.preco
 console.log(pproduto)

 pproduto.preco = null // sem preco
 console.log(!!pproduto.preco)
 console.log(pproduto)