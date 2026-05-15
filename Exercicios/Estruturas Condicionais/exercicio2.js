function verificarEstoque(qtdDisponivel){
    if(qtdDisponivel > 0){
        return "Produto disponível"
    }else{
        return "Produto indisponível"
    }
};

console.log(verificarEstoque(0));