const metaDeVendas = 5000;

function desempenhoIndividualDeVendas(valorVenda){
    const resultado = valorVenda / metaDeVendas;
    switch (true) {
        case (resultado >= 1): 
            return "Excelente Desempenho"
        case (resultado >= 0.9):
            return "Muito Bom Desempenho"
        case (resultado >= 0.8):
            return "Bom Desempenho"
        case (resultado >= 0.61):
            return "Desempenho Satisfatório"
        default:
            return "Desempenho Insatisfatório" 
    }
};

console.log(`Baseado nas suas vendas mensais e na meta estabelecida seu desempenho é: ${desempenhoIndividualDeVendas(5500)}`);
console.log(`Baseado nas suas vendas mensais e na meta estabelecida seu desempenho é: ${desempenhoIndividualDeVendas(4500)}`);
console.log(`Baseado nas suas vendas mensais e na meta estabelecida seu desempenho é: ${desempenhoIndividualDeVendas(4000)}`);
console.log(`Baseado nas suas vendas mensais e na meta estabelecida seu desempenho é: ${desempenhoIndividualDeVendas(3500)}`);
console.log(`Baseado nas suas vendas mensais e na meta estabelecida seu desempenho é: ${desempenhoIndividualDeVendas(2500)}`);
