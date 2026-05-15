function somar(n1, n2) {
    return n1 + n2
};
// console.log(somar(3,7));

const nomes = ['Ana', 'Elias', 'Carlos', 'Beatriz'];
// console.log(nomes);

function ordernarNomes(listaNome){
    return listaNome.sort();
};
ordernarNomes(nomes);
// console.log(nomes);

const valores_vazios = [
    0,
    "",
    null,
    undefined,
    false,
]

function compararValores(valor1, valor2){
    return (valor1 in valores_vazios || valor2 in valores_vazios) ? false : true
};
// console.log(compararValores(5, "texto"));

function calcularRendimento(valorInvestido, taxaDeJuros) {
    return valorInvestido * ( taxaDeJuros / 100)
};

// console.log(calcularRendimento(1000,5));

const frase = "Esta é uma frase de exemplo"
function dividirFrase(frase){
    return frase.split(/\s+/)
};
// console.log(dividirFrase(frase));

function calcularPontos(vitorias, empates){
    const pontos = empates + ( vitorias * 3 )
        return console.log(pontos)
};
// calcularPontos(5,2);

function contarVogais(frase2){
    const vogais = [
        "a","á","à","â","ã","ä","e","é","è","ê","ë","i","í","ì","î","ï","o","ó","ò","ô","õ","ö","u","ú","ù","û","ü"
    ]
    let qtdVogais = 0;
    frase2 = String(frase2).toLocaleLowerCase();
    for (letra in frase2){
        if(vogais.includes(frase2[letra])){
            qtdVogais +=1
        }
    }
    return console.log(qtdVogais)
};
// contarVogais('Olá, tudo bem?');

function maiorGasto(gastos){
    let vMaiorGasto = Math.max(gastos)
    let iMaiorGasto = gastos.indexOf(vMaiorGasto)
    return console.log(iMaiorGasto)
};
maiorGasto([10, 5, 20, 15]);
console.log([10, 5, 20, 15]);