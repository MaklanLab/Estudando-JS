// novo recurso do ES 2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 743

    
    }
    
}

const {nome,idade} = pessoa // tire o nome e a idade dentro da const pessoa
console.log("o nome é",nome,"e a idade é",idade)

// Tambem pode ser feito dessa forma

const { nome: n, idade: i} = pessoa
console.log("O nome é", n, "e a idade é de",i,"anos")

const { sobrenome,humor = true} = pessoa
console.log(sobrenome,humor)

const { endereco: {logradouro: l, numero:nu } } = pessoa 
console.log("A rua é:",l, "\nO numero da casa é",nu) 