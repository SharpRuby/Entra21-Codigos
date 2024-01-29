let vetor = [10, 20, 30, 40, 50]
const promise01 = new Promise((resolve) => {
    const abc = vetor.reduce((a, b) => a + b, 0);
    const medium = abc / vetor.length;
    resolve("A média dos elementos é:" + medium.toFixed(2))
});

promise01.then((resultado) => {
    console.log(resultado);
})

let numeros = [1, 2, 3, 4, 5, 6];
const promise02 = new Promise((resolve) => {
    const pares = numeros.filter((num) => num % 2 === 0);
    resolve("Números pares: " + pares)
})

promise02.then((resultado) => {
    console.log(resultado);
})


function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date(),
            });
        }, 1000);
    });
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                telefone: "997445151",
                ddd: 47,
            });
        }, 2000);
    });
}

const usuarioPromise = obterUsuario();

usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then((tudo) => {
                return {
                    user: {
                        nome: usuario.nome,
                        telefone: tudo.telefone,
                    },
                };
            });
    })
    .then(function (resultado) {
        console.log("Sucesso", resultado);
    })
    .catch(function (error) {
        console.error("Deu ruim", error);
    });