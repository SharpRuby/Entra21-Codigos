// let dataAtual = new Date (); 
// console.log(dataAtual);

// let ano = dataAtual.getFullYear(); 
// console.log(ano);

// let mes = dataAtual.getMonth(); 
// console.log(mes);

// let dia = dataAtual.getDate(); 
// console.log(dia);

// let horas = dataAtual.getHours(); 
// console.log(horas);

// let minutos = dataAtual.getMinutes(); 
// console.log(minutos);

// let segundos = dataAtual.getSeconds(); 
// console.log(segundos);

let dataFutura = new Date(); 
dataFutura.setDate(dataFutura.getDate() + 2); 
console.log(dataFutura.toLocaleString());


let data1 = new Date("2023-01-15");
let data2 = new Date("2023-01-10");

let timesteps1 = data1.getTime(); 
let timesteps2 = data2.getTime(); 

let diferenciaEmMilisegundos = timesteps1 - timesteps2; 
let diferenciaEmDias = diferenciaEmMilisegundos / (1000 * 60 * 60 * 24); 

console.log(`A diferencia entre as datas é de ${diferenciaEmDias} dias.`);

let date = new Date(); 
function formatarData(data) {
    let dia = data.getDate(); 
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    
    return `${dia} / ${mes} / ${ano}`
}

let dataFormatada = formatarData(date);
console.log(dataFormatada);