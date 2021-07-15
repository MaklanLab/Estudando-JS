const pessoa = {
    nome: 'Rebeca',
    idade: 13,
    peso: 52,

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
console.log(`${chave}; ${valor}`)        
});        //percorre a string

/*Object.defineProperties(pessoa, 'dataNacimento',{
    enumerable: true,
    writable: false,
    value: '01/02/2019'
})
pessoa.dataNacimento ='02/03/2010'
console.log(pessoa.dataNacimento)*/

//object.assing (EcnaScript 2015)
const dest = {a:1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest,o1,o2)      //const obj = Object.assign(depois dese primeiro atributo todos irao concatenar nele,o1,o2)

Object.freeze(obj)
obj.c =1234
console.log(obj)
