const produtoDisponivel = true;
const qtdProdutosEmEstoque = 10;
const qtdMinimaEmEstoque = 15;
const qtdEstoqueEhSuficiente = qtdProdutosEmEstoque >= qtdMinimaEmEstoque

if(produtoDisponivel) {
    console.log("O produto está disponível e tem a quantidade suficiente:", qtdEstoqueEhSuficiente)
} else {
    console.log("O produto está indisponível:", qtdEstoqueEhSuficiente)
}