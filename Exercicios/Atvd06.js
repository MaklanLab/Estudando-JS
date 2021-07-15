const fun1 = (C,I,T) => {
    const jurosimples = C * I * T
    const Resultado = jurosimples.toFixed(2).replace('.',',')
    return Resultado
}
console.log(fun1(1000,0.10,3))

    //errei essa
     function jurosCompostos (capitalInicial, taxa, tempo) {
        return capitalInicial * (1 + taxa) ** tempo
    }
    console.log(jurosCompostos(500,000, 05/500,000, 3))