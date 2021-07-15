function carro (velocidadeMaxima = 200, delta = 5) {
       //atributo privado
       let velocidadeatual = 0
    
       //metodo publico
       this.acelerar = function () {
           if (velocidadeatual + delta <= velocidadeMaxima) {
               velocidadeatual += delta
            } else {
                   velocidadeatual = velocidadeMaxima
               }
           }
       //metodo publico
       this.getvelocidadeatual= function () {
           return velocidadeatual
       }
}

const uno = new carro
uno.acelerar ()
console.log(uno.getvelocidadeatual())

ferrari = new carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())
console.log(typeof carro)
console.log(typeof ferrari)
