const sequencia = {
    _valor: 1, //convencao
    get valor () {
        return this._valor++
    },
    set valor (valor) {
        if(valor > this.valor){
        this._valor = valor
        }
    },
  
};

function px(){
  let resultado = 5*6
for (let i = resultado; i <= 100; i++){
    resultado++
    console.log(resultado)
 }
}
console.log(px)
px()
    
    

console.log(sequencia.valor,sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor=900
console.log(sequencia.valor, sequencia.valor)

