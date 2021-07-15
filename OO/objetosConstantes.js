// pessoa -> 123 ->{...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'predrokkkkj'
console.log(pessoa.nome)

//pessoa <- 456 -> {...}
// pessoa = {nome: 'ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome:'jao'})
console.log(pessoaConstante.nome)
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)