//errei
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let ponto = 0; ponto < pontuacoes.length; ponto++) {
        if(pontuacoes[ponto] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[ponto]
            qtdQuebraDeRecords++
        }else if (pontuacoes[ponto] < menorPontuacao) {
            menorPontuacao = pontuacoes[ponto]
            piorJogo = ponto+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))