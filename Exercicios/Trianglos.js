function triangulo (inferiorDireit, Superior, inferiorEsq) {
    if (inferiorDireit == Superior && Superior == inferiorDireit) {
        return 'equilatero'
    }
    else if (Superior == inferiorEsq || inferiorDireit == inferiorEsq || Superior == inferiorEsq){
        return "iSOSCELES"
    }

    else {"Escaleno"} 
    
}

console.log(triangulo(8,8,8))