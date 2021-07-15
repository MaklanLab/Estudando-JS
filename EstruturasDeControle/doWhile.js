function gerainteiroEntre(min, max) {
    const valor = Math.random() * (max- min) + min
    return Math.floor(valor)

}

let opcao = 0

do  {
    opcao = gerainteiroEntre ( -1, 10)
    console.log(`A opcao escolhida foi ${opcao}.`)
    
}while (opcao != 0)

console.log(`ate a proxima`)