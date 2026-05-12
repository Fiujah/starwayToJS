/*
a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
c. Crie um objeto funcionario e atribua seus valores para um novo objeto
novoFuncionario.
d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
alterado.
*/
const estoque = [10, 20, 30];
const novoEstoque = [];
Object.assign(novoEstoque, estoque);
novoEstoque[2] = 35;
console.log("Estoque",estoque);
console.log("Novo Estoque",novoEstoque);

const funcionario = {
    nome: "Renan",
    salario: 5.483,
    cargo: "Analista Pleno"
};
console.log("Funcionario:", funcionario)
const novoFuncionario = {};

Object.assign(novoFuncionario, funcionario);
novoFuncionario.cargo = "Analista Senior";
novoFuncionario.salario = 7.333;


console.log("Novo Funcionario:", novoFuncionario)



