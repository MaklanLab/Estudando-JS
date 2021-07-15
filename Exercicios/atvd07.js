const Bhaskara = (ax2,bx,c) => {
    let Resultado = []
    let Delta = (bx**2) - (4 * ax2 * c)
    if (Delta < 0) {
        return('Delta é negativo')
    }
    let x1 = (-bx + Math.sqrt(Delta))/2*ax2
    let x2 = (-bx - Math.sqrt(Delta))/2*ax2
    Resultado.push(x1)
    Resultado.push(x2)
    return Resultado
}
console.log(Bhaskara(10, 12, 12))
console.log(Bhaskara(3, 1, 2))