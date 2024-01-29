let notas = [10, 8];
for (const nota of notas) {
  console.log("Nota:", nota);
 }

//
var matriz = [
[1 , 2 , 3] ,
[4 , 5 , 6]
]
console.log("");
console.log(matriz[0][0]); // A saída seria o número 1.
console.log("");
var matriz = [
    ["Banana" , "Maçã"],
    ["Pêra" , "Uva"],
]

let valores = []; 

for (let L = 0; L < 2; L++) {
    for (let C = 0; C < 2; C++) {
        valores += matriz[L][C] + "\n"
    }
}

console.log(valores);

function saudacao(nome) {
    return "Olá, " + nome + "!"; 
   } 
   let mensagem = saudacao("João"); 
   console.log(mensagem); // Saída: "Olá, João!"

function saudacao1() {
    console.log("Olá!");
}
saudacao1(); 