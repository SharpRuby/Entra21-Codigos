// var meuCarro = new Object();
// meuCarro.fabricacao = 'Ford';
// meuCarro.modelo = 'Mustang';
// meuCarro.ano = 1969; 

// console.log(meuCarro);
// console.log(meuCarro.modelo);

const carro = {
    marca: "Peugeot",
    modelo: "206",
    cor: "Prata", 
    ano: 2014,
    acelerar: function() {
        console.log('Acelerando...');
    }
}

carro.acelerar(); 
console.log(Object.keys(carro));
console.log(Object.getOwnPropertyNames(carro));

const pessoa = {
    nome: "Pablo",
    idade: 18,
    endereço: "Bairro Imigrantes, Rua Jamaica", 
    estadociv: "Namorando",
}

console.log(pessoa);