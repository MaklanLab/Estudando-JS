const notasDoaluno = (notas)  =>{
  if ( notas >= 3.80 && notas < 7 ) {
     return console.log(`Sua nota foi de ${Math.round(notas)} voce está de recuperacao`)
      
  } else if (notas < 3.80) {
      return console.log(`Sua nota foi de ${notas}, voce esta reprovado`)
  }
  else if(notas >=7 ) {
      return console.log(`Sua nota foi de ${Math.round(notas)} PARABENS!!! VOCE PASSOU :)`)
  }

}
notasDoaluno(8)
notasDoaluno(5.50)
notasDoaluno(3.79)
notasDoaluno(7)

