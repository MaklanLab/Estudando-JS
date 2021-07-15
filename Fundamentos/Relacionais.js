console.log("1:" ,"1" == 1) //igual
console.log('2:', '1' ===1) //extritamente igual (melhor usar essa)
console.log('3:', '3 ' !=3) //diferente
console.log('4:', '3' !==3) //extritamente diferente

console.log('5:', 8 < 3)
console.log("6:", 8 > 3)
console.log("7:", 8 <= 3)
console.log("8:", 8 >= 3)

const dat1 = new Date (0)
const dat2 = new Date (0)
console.log('9:', dat1 == dat2)
console.log('10:', dat1 === dat2)
console.log('11:', dat1. getTime() === dat2.getTime())
console.log("12:", undefined == null)
console.log('13:',undefined === null)