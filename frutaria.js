let estoqueManha = ["banana", "maçã", "abacaxi", "laranja"];
let estoqueTarde = ["uva", "melancia", "banana", "kiwi"];

let estoqueCompleto = estoqueManha.concat(estoqueTarde);
console.log(estoqueCompleto);

let estoqueUnico = [...new Set(estoqueCompleto)];

// Set é uma estrutura de dados que não permite duplicatas
// ou seja, ele remove os elementos duplicados do array
// e o operador de espalhamento (...) transforma o Set de volta em um array
// O resultado final é um array com elementos únicos

console.log(estoqueUnico);

estoqueUnico.unshift("caju");
console.log(estoqueUnico);

estoqueUnico.pop();
console.log(estoqueUnico);

let index = estoqueUnico.indexOf("banana");
estoqueUnico[index] = "pera";
console.log(estoqueUnico);

estoqueUnico.forEach((fruta) => {
  console.log("Fruta disponivel no estoque: " + fruta);
}); 
// O forEach é um método que executa uma função para cada elemento do array
// O parâmetro fruta é o elemento atual do array
// O console.log imprime a fruta atual no estoque
// O resultado final é uma lista de frutas disponíveis no estoque
// O forEach não retorna um novo array, ele apenas executa a função para cada elemento

let copiaEstoqueUnico = [...estoqueUnico];
copiaEstoqueUnico.sort();
estoqueUnico = [];
console.log(estoqueUnico);
console.log(copiaEstoqueUnico);


console.log(somar(1,2));

function somar(a, b) {
    return a + b;
}