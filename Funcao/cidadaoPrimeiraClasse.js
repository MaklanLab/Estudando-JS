//funcao em JS é First-class Object (Citizens)
// Higher-order function

//criar de forma literal
 function fun1 ( ) {} 
 
 // Armazenar em uma Variavel
 const fun2 = function () {}

 // Armazenar em um Array
  const array = [ function (a,b) {return a + b}, fun1, fun2 ]
  console.log(array [0](2,19)) // [0] pegamos o indice  0 do array

  // Armzenar em atributo de objeto
  const obj = {}
  obj.falar = function () {return "opa"}
  console.log(obj.falar())

  // Passar funcão como parameto
   function run(fun) {
       fun()
   }

   run (function () { console.log( 'Ola mundo' )})

   // Uma Funcão pode retonar/conter uma funcão

   function soma (a,b) {
       return function (c) {
           console.log( a + b + c)
       }
   }
   
  soma (6,8) (9)
  