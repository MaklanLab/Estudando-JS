const pessoa = {
    saudacao: 'Bom dia!!',
    Falar () { // funcao dentro do obj
         console.log(this.saudacao)
    }
}

pessoa.Falar()
const Falar = pessoa.Falar 
Falar() // conflito entre paradigmas;: funcional e oo

const falarde = pessoa.Falar.bind(pessoa)
falarde()