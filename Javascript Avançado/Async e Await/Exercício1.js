// Exercício1
let vetor = [10, 20, 30, 40, 50]
function mediaNumeros() {
    return new Promise((resolve) => {
        const abc = vetor.reduce((a, b) => a + b, 0);
        const medium = abc / vetor.length;
        resolve("A média dos elementos é: " + medium.toFixed(2))
        reject("Deu erro.")
    });

}
// promise01.then((resultado) => {
//     console.log(resultado);
// })

async function resultado1() {
    try {
        const resolve = await mediaNumeros();
        console.log(resolve);

    } catch (reject) {
        console.log("Erro: Não foi possível executar o código.");
    }
}

resultado1();

//Exercício2
let numeros = [1, 2, 3, 4, 5, 6];
function paresNumeros() {
    return new Promise((resolve) => {
        const pares = numeros.filter((num) => num % 2 === 0);
        resolve("Números pares: " + pares)
    });
}

// promise02.then((resultado) => {
//     console.log(resultado);
// })

async function resultado2() {
    try {
        const resolve = await paresNumeros();
        console.log(resolve);
    } catch (reject) {
        console.log("Erro: Não foi possível executar o código.");
    }
}

resultado2();

//Exercício3
function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date(),
            });
        }, 100);
    });
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                telefone: "997445151",
                ddd: 47,
            });
        }, 100);
    });
}

async function resultado3() {
    try {
        const resolve1 = await obterUsuario();
        console.log("Nome: " + resolve1.nome + " / Data de Nascimento: " + resolve1.dataNascimento);
        const resolve2 = await obterTelefone();
        console.log("Telefone " + resolve2.telefone + " / DD: " + resolve2.ddd);
    } catch (reject) {
        console.log("Erro: Não foi possível executar o código.");
    }
}

resultado3();

// const usuarioPromise = obterUsuario();
// usuarioPromise
//     .then((usuario) => {
//         return obterTelefone(usuario.id)
//             .then((tudo) => {
//                 return {
//                     user: {
//                         nome: usuario.nome,
//                         telefone: tudo.telefone,
//                     },
//                 };
//             });
//     })
//     .then(function (resultado) {
//         console.log("Sucesso", resultado);
//     })
//     .catch(function (error) {
//         console.error("Deu ruim", error);
//     });

function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = {
                nome: 'Usuário Exemplo',
                idade: 25
            };
            if (Math.random() < 0.2) {
                reject(new Error('Erro ao obter dados da API.'))
            } else {
                resolve(dados);
            }
        }, 2000);
    });
}

async function processarDados() {
    try {
        const dadosProcessados = await buscarDados();
        console.log("Nome: " + dadosProcessados.nome + " / Idade: " + dadosProcessados.idade);
    } catch (erro) {
        console.error(erro);
    }
}

processarDados();