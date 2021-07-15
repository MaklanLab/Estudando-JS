const imprimirResuldado = function (nota) {
    switch ( Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de honra")
            break
                case 8: case 7: 
                console.log('Aprovado!!')
                break
                case 6: case 5: case 4:
                console.log('Recuperaca')
                 break
                case 3: case 2: case 1: case 0: 
                console.log("Reprovado")
                break
        default: ("Nota inválida")
    }
}


    imprimirResuldado (1.5)
    //imprimirResuldado(8.9)
    //imprimirResuldado (6.55)
    //imprimirResuldado (2.3)
    //imprimirResuldado (11)
    //imprimirResuldado ( -1)

    

