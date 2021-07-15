const fatorial = (a) => {
const soma = []
while ( a > 1){
    for (let i = 2; i <= a; i++) {
        if (a % i) continue
        soma.push([a,i])
        a= a / i
        break
    }
    
  } soma.push([1,''])
  return soma
}

console.log(fatorial (144))
