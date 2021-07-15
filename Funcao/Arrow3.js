let comparacomthis = function (param) {
 console.log(this === param)
}
comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj) // mudando a referencia
comparacomthis(global)
comparacomthis(obj)

let comparacomthisArrow = (param) => console.log(this === param)
comparacomthisArrow (global)
comparacomthisArrow (module.exports)

comparacomthisArrow = comparacomthisArrow.bind (obj) // tentativa de mudar a referencia 
comparacomthisArrow(obj)
comparacomthis(module.exports)