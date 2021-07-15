//CERTO
const anobi = (ano) => {
    const soma = ano / 4
    if (soma == Number.parseInt(soma)) {
        return console.log(`O ano de ${ano},é um ano bissexto`)
    } 
    else { return console.log(`O ano de ${ano},NÃO é um ano bissexto`)}
}

anobi(3013)
anobi(2020)