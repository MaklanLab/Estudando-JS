function teste1 (num) {
    if (num > 7)
    console.log (num)
console.log("Final") // esta fora do bloco de funcionamento do if, por q o if sem as {} so considera 1 bloco 
}

teste1(6)
teste1(8)

function teste2 (num) {
    if ( num > 7)
    ; // o ; deixou uma sentenca de codigo vazia por isso imprimiu o 6 mesmo sendo 7 <, evitar usar com as estruturas de controle
    {
        console.log(num)
    }
}
teste2(6)
teste2(8)

