const percentualNovo = 0.1
const quantidadeNova = 5

let Venda = {
    produto: "Mouse", 
    quantidade: 2,
    precoUnitario: 100,
    desconto: 0.05,
    calcularTotal: function(){ //Exercício 1
        totalBruto = this.quantidade * this.precoUnitario
        totalComDesconto = totalBruto - (totalBruto * this.desconto)
        return totalComDesconto
        console.log(this.calcularTotal())
    },
    aplicarDesconto: function(){ // Exercício 2
        Object.defineProperty(Venda, "desconto", {value: percentualNovo})
    },
    atualizarQuantidade: function(){ // Exercício 3
        Object.defineProperty(Venda, "quantidade", {value: quantidadeNova})
    },
    verificarEstoque: function(quantidadeNoEstoque) { // Exercício 4
        const quantidadeEhSuficiente = this.quantidade <= quantidadeNoEstoque
        if(quantidadeEhSuficiente){
            console.log(`Venda pode ser realizada`)
        }else {
            console.log(`É necessário validar a quantidade em estoque`)
        }
    }
};
// console.log(Venda.calcularTotal());
// Venda.aplicarDesconto();
// console.log(Venda.calcularTotal());
// Venda.atualizarQuantidade();
// console.log(Venda.calcularTotal());
// Venda.verificarEstoque(2);
// console.log(Object.entries(Venda)); //Exercício 5
// console.log(Object.keys(Venda)); //Exercício 6
// console.log(Object.values(Venda)); //Exercício 7
// console.log(Venda.hasOwnProperty("descontos")); //Exercício 8

const NovaVenda = {};
Object.assign(NovaVenda, Venda)
NovaVenda.quantidade = 7
NovaVenda.produto = 'Teclado'
console.log(Object.entries(Venda)); 
console.log(Object.entries(NovaVenda)); 