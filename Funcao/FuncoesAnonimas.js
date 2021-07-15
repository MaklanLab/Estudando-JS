const soma = function (x,y) { //funcao anonima nao possui nome
    return x + y 
}


const imprimirResultado = function (a,b, operacao = soma) {  // se o paramentro "operacao" nao receber nenhum, valor sera atribuido o valor da soma
    console.log(operacao(a,b))
} 
imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function (x,y) { // o terceiro parametro se tornou a funcao
    return x - y
})

imprimirResultado (3,4, (x,y) => x * y)

const pessoa = {
    falar: function () {
        console.log("OPA")
    }
} 

pessoa.falar()
 
