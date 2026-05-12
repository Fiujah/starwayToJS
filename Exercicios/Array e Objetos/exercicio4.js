const venda = {
    cliente: "Renan",
    produto: "Fogão",
    valor: 1200
}
// Object.assign(produto, {emEstoque: 10}); // Add propriedades ao objeto assign(objetoOrigem, {nomeNovaPropriedade: valor})

Object.assign(venda, {data: '11/05/2026'})

delete venda.produto

console.log(venda)