function melhorBandaDeRock(banda) {
    return new Promise((resolve, reject) => {
        if (banda == "Oficina G3") {
            resolve({
                sucesso: true,
                nomeDaBanda: banda,
                msg: banda + " é a melhor banda de rock!",
            });
        } else {
            reject ({
                sucesso: false,
                msg: "Não tenho certeza",
            });
        }
    });
}

function melhorMusica(resposta) {
    return new Promise((resolve, reject) => {
        if (resposta.sucesso) {
            resolve("Humanos de " + resposta.nomeDaBanda);
        } else {
            reject("Você conhece a oficina G3?")
        }
    }); 
}

async function façaOTrabalho() {
    try {
        const melhorBandaResposta = await melhorBandaDeRock("Oficina G3");
        console.log(melhorBandaResposta);

        const melhorMusicaResposta = await melhorMusica(melhorBandaResposta);
        console.log(melhorMusicaResposta);

    } catch (erro) {
        console.log(erro.msg);
    }
}

façaOTrabalho(); 

// melhorBandaDeRock("Oficina G3")
//     .then((response) => {
//         console.log("Checkando a resposta...");
//         return melhorMusica(response)
//     })

//     .then(response => {
//         console.log("Encontrando a melhor música.");
//         console.log(response);
//     })

//     .catch(err => {
//         console.log(err.msg);
//     })