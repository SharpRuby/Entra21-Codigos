function minhaFuncaoNomeada(algumparamentro) {
    console.log('A função está', algumparamentro);
}

minhaFuncaoNomeada('nomeada.');


const minhaFuncaoAnonima = function () {
    console.log('Função anônima.');
}

minhaFuncaoAnonima();


const arrowFunction = () => {
    console.log('Arrow Function.');
}

arrowFunction();


const saudar1 = (responder) => {
    const horaAtual = new Date().getHours();
    // const responder = (saudacao) => {console.log(saudacao);} 

    if (horaAtual <= 12) {
        return responder ('Bom dia!')
    } else if (horaAtual <= 18) {
        return responder ('Boa tarde!')
    } else {
        return responder('Boa noite!')
    }
}

const callback = (saudacao) => {console.log(saudacao);} 
saudar1(callback); 


// const saudar2 = function horaSaudacao (pcallback) {
//     const horaAtual = new Date().getHours();

//     if (horaAtual <= 12) {
//         return pcallback ('Bom diaa!')
//     } else if (horaAtual <= 18) {
//         return pcallback ('Boa tardee!')
//     } else {
//         return pcallback('Boa noitee!')
//     }
// }

// const imprimirsaudacao = function imprime(saudacao) {
//     console.log(saudacao);
// }

const funcaoPrincipal = (parametro) => {
    const valor = 77; 
    parametro(valor);
}

const callbackson = (number) => {
    console.log(number);
}

funcaoPrincipal(callbackson);