 const dinheiro = (a,b) => { 
  const soma = a + b
    const Decimais = soma.toFixed(2)
     const total = Decimais.replace(".",",")
      return total
        }
 console.log(`Total de R$${dinheiro(0.10,0.20)}`)


