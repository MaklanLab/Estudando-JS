function getpreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc)* (1 + imposto)} `
}
const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getpreco

}

globalThis.preco = 20
globalThis.desc = 0.25
console.log(getpreco())
console.log (produto.getpreco())

const carro = {preco: 51000, desc:0.50}
console.log(getpreco.call(carro))
console.log(getpreco.apply(carro))

console.log(getpreco.call(carro,0.30,'$'))
