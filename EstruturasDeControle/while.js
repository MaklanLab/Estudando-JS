function gereUmInteiroEntre (min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { //equanto a opcao for != (diferente)  ( verdadeira) de -1 executa a setenca 
    opcao = gereUmInteiroEntre (-1,10) //vai gerar os numeros
    console.log(`opcao escolhida foi ${opcao}.`)
}

console.log("Ate a Proxima bb")