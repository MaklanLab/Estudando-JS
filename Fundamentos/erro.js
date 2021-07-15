function tratarErroELancar(erro) {
    //throw new Error ('algo deu errado')
    throw "Algo deu errado"
}
function ImpRiminome (obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!!")
    } catch (e) {
        tratarErroELancar(e)
    }
    
}
const obj = { nome : "Roberto"}
ImpRiminome(obj)