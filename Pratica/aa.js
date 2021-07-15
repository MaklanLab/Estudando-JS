function waterP (idade){
    if (idade < 18){
         return console.log("nao sabemos calcular sua idade")

     }
    let adulto = (idade-17)
    let total =(365*adulto)/2
    return console.log(`${total} litros`)
}

(waterP(19))