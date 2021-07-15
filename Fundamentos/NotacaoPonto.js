//O *. acessa os menbros de um obejeto e de uma funcao
console.log(Math.ceil(6.2))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = "bolaaaaaaa"
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this. exec = function() {
        console.log("exec")
    }
}

const obj2 = new obj("Cadeira")
const obj3 = new obj("banco")
console.log(obj2.nome)
console.log(obj3.nome)