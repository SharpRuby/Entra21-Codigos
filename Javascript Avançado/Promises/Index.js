const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operação Concluída!")
    }, 1000);
});

console.log(minhaPromise);

minhaPromise.then((resultado) => {
    console.log(resultado);
})

//Callback 
// function somaNumeros(sucesso, erro) {
//     let result = 1 + 1;

//     if (result == 2) {
//         sucesso();
//     } else {
//         erro();
//     }
// }

// function sucesso() {
//     console.log("Deu certo, número 2.");
// }

// function erro() {
//     console.log("Errou.");
// }

// somaNumeros(sucesso, erro); 

//Promise
let promise = new Promise((resolve, reject) => {
    let soma = 1 + 1; 
    if (soma == 2) {
        resolve("Sucesso!");
    } else {
        reject("Errado!");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});

//Callback
// const melhorDev0 = 'João'; 
// function quemEMelhor0 (callback, erroCallback) {
//     if (melhorDev0 != 'Fernanda' && melhorDev0 != 'Andre') {
//         erroCallback({
//             name: 'Está errado!',
//             message: melhorDev0 + ' ? Sério ?'
//         })
//     } else {
//         callback({
//             name: melhorDev0,
//             message: 'somos os melhores!'
//         })
//     }
// }

// quemEMelhor0((result) => {
//     console.log(result.name + '? Uhuu ' + result.message);
// }, (erro) => {
//     console.log(erro.name + ' ' + erro.message);
// })

//Promise 
const melhorDev1 = 'Fernanda'; 
let promessa = new Promise((resolve, reject) => {
        if (melhorDev1 != 'Fernanda' && melhorDev1 != 'Andre') {
            reject ({
                name: "Está errado!",
                message: melhorDev1 + '? Sério ?' 
            });
        } else {
            resolve ({
                name: melhorDev1,
                message: "CDFs são os melhores!"
            }); 
        }
    });

promessa.then((result) => {
    console.log(result.name + "? Yeah! " + result.message);
}).catch((error) => {
    console.log(error.name + " " + error.message);
})