let precoProduto = 200;
let valorDesconto = 40;
let impostoSobreDesconto = 12;

function calcularPrecoFinal() {
    return precoProduto - valorDesconto + impostoSobreDesconto
};

console.log('O Preço final do produto: R$', calcularPrecoFinal())