let qtdProdutosEmEstoque = "20";
let qtdMinimaEstoque = 20;
let qtdEstoqueEhSuficiente = "";

if(Number(qtdProdutosEmEstoque) >= qtdMinimaEstoque) {
    qtdEstoqueEhSuficiente = true;
} else qtdEstoqueEhSuficiente = false;

console.log("A Quantidade no estoque é suficiente: ", qtdEstoqueEhSuficiente)