const valorCompra = 90;
const valorDesconto = 0.1;
let valorFinal = 0

if(valorCompra >= 100){
    valorFinal = valorCompra - (valorCompra * valorDesconto)
    console.log(`O cliente possui direito a desconto, valor final da compra: R$ ${valorFinal}`)
}else{
    console.log(`O cliente não possui direito a desconto, valor final da compra: R$${valorFinal}`)
}
