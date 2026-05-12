let custoProduto = 300;
let valorDesconto = 50;
let valorOrcamento = 250;
let valorFinal = custoProduto - valorDesconto;
let verificarSePrecoEstaDentroDoOrcamento = "";

if (valorFinal <= valorOrcamento) {
    verificarSePrecoEstaDentroDoOrcamento = "Está dentro do orçamento? Sim!" ;
} else {
    verificarSePrecoEstaDentroDoOrcamento = "Está dentro do orçamento? Não!";
}

console.log('Preço com desconto: R$',valorFinal,"e",verificarSePrecoEstaDentroDoOrcamento)
