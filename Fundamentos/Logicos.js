 function compras (trabalho1,trabalho2){
     const comprarSorvete = trabalho1 || trabalho2
        const comprarTv = trabalho1 && trabalho2 // && é igual ao *e na tabela verdade
           //const comprartv32 = !!(trabalho1 ^ trabalho2 ) //bitwise xor
              const tvde32 = trabalho1 != trabalho2 // ou exclusivo
                  const comerSaudavel = !comprarSorvete //operador unario
                  return {  comprarSorvete, comprarTv, tvde32, comerSaudavel}
 }

 console.log(compras(true,true))
 console.log(compras(true, false)) // true e false é o valor do trabalho 1 e 2 
 console.log(compras(false, true))
 console.log(compras(false, false))