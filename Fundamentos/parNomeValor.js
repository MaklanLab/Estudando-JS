//par nome/valo
const saudacao = "opa" //contexto Lexico 1


function exec () {
    const fala = "Fodase mermao" //contexto Lexico 2
    return fala
  }
//objetos sao grupos aninhados de pares nome/valor

const Client = {
    nome: "Pedro",
    idade: 19,
    peso: 64,
    endereco: {
        logradouro: 'Rua da cacimba',
        numer: 123

    }
}

console.log(exec())
console.log(Client)