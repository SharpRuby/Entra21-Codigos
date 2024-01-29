// Criando o vetor
let vetor = [1, 2, 3, 4, 5]; 
// Acesso a elementos 
let primeiroElemento = vetor[0]; // Retorna 1 
let segundoElemento = vetor[1]; // Retorna 2
console.log(primeiroElemento);
console.log(segundoElemento);

// Inserção 
vetor.push(6); // Adiciona o número 6 ao final do vetor 
console.log(vetor);
// Remoção 
vetor.pop(); // Remove o último elemento do vetor (retorna 6, pois foi o último elemento adicionado)
console.log(vetor);

// Pesquisa 
let indiceDoN4 = vetor.indexOf(4); // Retorna o índice do número 4 no vetor (retorna 3)
console.log(indiceDoN4);

// Ordenação em ordem crescente 
vetor.sort((a, b) => a - b); // Ordena o vetor em ordem crescente (neste caso, resultaria em [1, 2, 3, 4, 5]) 
// Ordenação em ordem decrescente 
vetor.sort((a, b) => b - a); // Ordena o vetor em ordem decrescente (resultaria em [5, 4, 3, 2, 1])

// Concatenação 
let outroVetor = [6, 7, 8]; 
let vetorConcatenado = vetor.concat(outroVetor); // Concatena os dois vetores em um único vetor

// Tamanho do vetor 
let tamanho = vetor.length; 
// Retorna 5 (o tamanho do vetor)

// Modificação de elementos 
vetor[0] = 10; 
// Altera o primeiro elemento para 10 (o vetor agora seria [10, 2, 3, 4, 5]);
