Number.prototype.entre=function (inicio,fim) {
    return this >= inicio && this <= fim
}

const imprimirNota = function (nota) {
    if(nota.entre(9,10)){
      console.log ("Quadro de honra")
    } else if ( nota.entre(7, 8.99)) {
          console.log("Aprovado")
        } else if (nota.entre(0, 6.99)){
            console.log("Reprovado")
    } else {
        console.log( 'Nota invalida')
    }
 console.log("FIM")
}

imprimirNota(9.90)
imprimirNota (7.87)
imprimirNota(4)
//imprimirNota('epa') // Agora nao funciona pois especifiquei que era um number nao uma string
imprimirNota(-1)
