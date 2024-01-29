//  Montar uma matriz nas dimensões 4x5 e imprimir a soma das linhas e colunas. 
const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

// Calcular e imprimir a soma das linhas
console.log("Soma das Linhas:");
for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < matriz[i].length; j++) {
        somaLinha += matriz[i][j];
    }
    console.log(`Linha ${i + 1}: ${somaLinha}`); 
}

// Calcular e imprimir a soma das colunas
console.log("Soma das Colunas:");
for (let j = 0; j < matriz[0].length; j++) {
    let somaColuna = 0;
    for (let i = 0; i < matriz.length; i++) {
        somaColuna += matriz[i][j];
    }
    console.log(`Coluna ${j + 1}: ${somaColuna}`);
}