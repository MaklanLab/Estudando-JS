class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Bem vindx  ${this.nome}`)
    }
}

const p1 = new pessoa ('joao')
p1.falar()

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é  ${nome}`)
    }
}

const p2 = CriarPessoa ("Raquel")
p2.falar()