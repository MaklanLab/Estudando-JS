//clousere é o escopo criad o quando voce declara uma funcao 
// Esse escopo permite a funcao acessar e manipular  variaveis externas à funcao 

// contexto lexico

const x = "Global"

function fora () {
    const x = "Fora"
    function Dentro () {
       return x
    }
    return Dentro
}

const minhafuncao = fora()
console.log(minhafuncao())
