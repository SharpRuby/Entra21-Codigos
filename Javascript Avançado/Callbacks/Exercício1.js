let num = [152, 235, 312, 456, 510];
const array = () => {
    callback();
}

const callback = () => {
    const a = num.reduce((a, b) => a + b, 0);
    const media = a / num.length;
    console.log("A média dos elementos é:", media);
    // let soma = 0;
    // for (let i = 0; i < num.length; i++) {
    //   soma += num[i];
    // }
    // const media = soma / num.length;
    // console.log(media);
}
array(callback);


let numeros = [1, 2, 3, 4, 5, 6];
const callbackpares = (array) => {
    let resultado = vetor(array);
    console.log(resultado);
}

const vetor = () => {
    const pares = numeros.filter((num) => num % 2 === 0);
    return pares;
}


callbackpares(numeros, vetor);

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date(),
        });
    }, 100)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: '997445151',
            ddd: 47,
        });
    }, 200);
}

obterUsuario(function resolverUsuario(erro, usuario) {
    if (erro) {
        console.error("Deu ruim em usuário", erro);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error, telefone) {
        if (error) {
            console.error("Deu ruim em telefone", erro);
            return;
        }

        console.log(`
          Nome: ${usuario.nome}
          Telefone: (${telefone.ddd})${telefone.telefone}
        `);

    });
});