function pessoa (nome) {
    this.nome = nome

    this.falar = function () {  //criamos uma funcao
        console.log(`Meu nome é ${nome}`)
    } 
}
const p1 = new pessoa ("Pedro")
p1.falar()