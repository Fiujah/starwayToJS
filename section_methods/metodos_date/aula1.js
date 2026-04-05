class Carro {
    marca = "Toyota";
    modelo = "Corolla";
    ano = 2025;

    ligar() {
        console.log("Carro ligado");
    }

    desligar() {
        console.log("Carro desligado");
    }

    exibirInformações() {
        console.log(`O carro é de modelo ${Carro.modelo}, da marca ${Carro.marca}, do ano de ${Carro.ano}`)
    }
}

const carro =  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2025,
}

const classeCarro = new Carro();

console.log(classeCarro.modelo)

console.log(Math);
console.log(new Date());

const dataAtual = new Date();