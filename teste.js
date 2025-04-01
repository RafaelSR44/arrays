var frutas = ['banana', 'maçã', 'laranja'];
console.log(frutas); 

// Adicionando um elemento ao final do array
frutas.push('uva');
console.log(frutas);

// Adicionando um elemento ao início do array
frutas.unshift('abacaxi');
console.log(frutas);

// Removendo o último elemento do array
frutas.pop();
console.log(frutas);

// Removendo o primeiro elemento do array
frutas.shift();
console.log(frutas);

// Deletando um elemento específico do array
delete frutas[0];
console.log(frutas);

// Encontrando o índice de um elemento
var indice = frutas.indexOf('maçã');
console.log(indice);

// Verificando se um elemento existe no array
var existe = frutas.includes('laranja');
console.log(existe);

// Ordenando o array
frutas.sort();
console.log(frutas);

// Invertendo a ordem do array
frutas.reverse();
console.log(frutas);

// Filtrando o array
var frutasFiltradas = frutas.filter(function(fruta) {
    return fruta.startsWith('a');
});
console.log(frutasFiltradas);

// Mapeando o array
var frutasMapeadas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
console.log(frutasMapeadas);

// Reduzindo o array
var soma = frutas.reduce(function(acumulador, fruta) {
    return acumulador + fruta.length;
}, 0);
console.log(soma);

// Verificando o tamanho do array
var tamanho = frutas.length;
console.log(tamanho);

// Concatenando arrays
var maisFrutas = ['kiwi', 'manga'];
var todasFrutas = frutas.concat(maisFrutas);
console.log(todasFrutas);

// Espalhando um array
var frutasEspalhadas = [...frutas, ...maisFrutas];
console.log(frutasEspalhadas);

// Criando um array a partir de uma string
var string = 'banana,maçã,laranja';
var arrayDeFrutas = string.split(',');
console.log(arrayDeFrutas);

// Juntando um array em uma string
var stringDeFrutas = arrayDeFrutas.join('-');
console.log(stringDeFrutas);

// Verificando se é um array
var ehArray = Array.isArray(frutas);
console.log(ehArray);

// Iterando sobre o array
frutas.forEach(function(fruta, index) {
    console.log(index + ': ' + fruta);
});

// Criando um array multidimensional
var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz);

// Acessando um elemento de um array multidimensional
var elemento = matriz[1][2]; // 6
console.log(elemento);

// Adicionando um elemento a um array multidimensional
matriz[0].push(10);
console.log(matriz);

// Removendo um elemento de um array multidimensional
matriz[1].pop();
console.log(matriz);

// Iterando sobre um array multidimensional
for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

let legal = "legal";
let arr= [...legal];
console.log(arr);
// O operador de espalhamento (...) transforma a string legal em um array
// O resultado final é um array com os caracteres da string
// O operador de espalhamento é útil para transformar estruturas de dados em arrays
// e vice-versa, como no caso do Set
// O resultado final é um array com os caracteres da string


