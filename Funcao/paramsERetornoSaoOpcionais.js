function area (largura, Altura) {
    const area = largura * Altura
    if (area >= 21) {
        console.log(`Valor acima do permitido ${area}m2.`)
    }
    else {
        return area
    }
} 
console.log (area (2,3))
console.log(area(2))
console.log(area (4,6))