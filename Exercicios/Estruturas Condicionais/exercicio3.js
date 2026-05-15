function categoriaCliente(pontuacao){
    switch (true) {
        case (pontuacao >= 85): 
            return "Cliente Premium"
        case (pontuacao >= 50):
            return "Cliente Regular"
        default:
            return "Cliente Comum" 
    } 
};

console.log(categoriaCliente(95));
console.log(categoriaCliente(70));
console.log(categoriaCliente(20));