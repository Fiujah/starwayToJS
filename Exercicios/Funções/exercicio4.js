const valorProduto = 50;
const impostoSobreProduto = 0.0875;

function calcularPrecoFinal(preco, imposto){
    const precoFinal = preco + (preco * imposto)
        return precoFinal
}

console.log(`O valor a ser pago é ${calcularPrecoFinal(valorProduto, impostoSobreProduto)}`)