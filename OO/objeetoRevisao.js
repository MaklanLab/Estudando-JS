const produto = new Object
produto.nome =  'Cadeira'
produto ['Marca do produto'] = 'Generica'
produto.preço = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'Hilux',
    valor: 9000,
    propietario: {
        Nome: ' Rau Seixas',
        idade: 56,
        carteiraDeMotorista: 'A',
        Lougradoro: {
            rua: 'Padre Cicero',
            numeroDaCasa: 240,
        }
    },
    condutores: [{
        nome: ' junior',
        idade: 19,
    }, {
        nome: 'Ana Banana',
        idade: 24
    }],
     //poe ter funcao
    //...
}

carro.propietario.Lougradoro.rua = ' Joaquin freitas'
console.log(carro)