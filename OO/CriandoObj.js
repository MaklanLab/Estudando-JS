// usando a notacao literal 
const obj = {}
    console.log(obj)

// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes Construtoras 

function Produto (nome,preco,desc){
    this.nome= nome
    this.getPrecoComDesconto = () => {
       return preco * (1-desc)
    }
}

const p1 = new Produto ('Caneta',7.99,0.15)
const p2 = new Produto ('Notebook',799,0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao factory
function criarfunc (nome, salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){ // Funcao
            return (salario / 30) * (30-faltas)

        }
    }
}

const f1 = criarfunc('Joao',7980,4)
const f2 = criarfunc('Maria', 11400, 1)
console.log(f1.getSalario(),f2.getSalario())

// Obejct.create

const filha = Object.create(null)
filha.nome='Ana'
console.log(filha)

// Funcao famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um json":}')
console.log(fromJSON.info)