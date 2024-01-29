let dataAtual = new Date();
console.log(dataAtual);

let data = new Date("2023-03-18");
function formatarData(data) {
    let dia = data.getDate() + 1;
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`
}

let dataFormatada = formatarData(data);
console.log(dataFormatada);

let dataAtual0 = new Date();
let dia0 = dataAtual0.getDate() + 2;
let mes0 = dataAtual0.getMonth() + 1;
let ano0 = dataAtual0.getFullYear();
console.log(`${dia0}/${mes0}/${ano0}`);

const date1 = new Date("03-18-2005");
const date2 = new Date("03-18-2004");
const diferençaTempo = (date1 - date2);
const diferençaDias = (diferençaTempo / (1000 * 60 * 60 * 24));
console.log(diferençaDias + " dias.");

let data1 = new Date("2022-01-01");
let data2 = new Date("2023-01-01");

if (data1 > data2) {
    console.log("Data 1 é mais recente");
} else if (data1 < data2) {
    console.log("Data 2 é mais recente");
} else {
    console.log("As datas são iguais");
}