// const mapa = new Map(); 
// mapa.set("Modelo" , "Fusca")
// mapa.set("Ano de Fabricação" , 1999)
// mapa.set("Cor" , "Vermelho")

// console.log(mapa);

let mapaCarros = new Map(); 
mapaCarros.set("Carro1", {Modelo: "Fusca", AnodeFabricação: 2000, Cor: "Azul"});
// mapaCarros.set("Carro2", {Modelo: "Fusca Golf", AnodeFabricação: 1999, Cor: "Vermelho"});
// mapaCarros.set("Carro3", {Modelo: "Fusca X", AnodeFabricação: 1998, Cor: "Verde"});

console.log("Antes da alteração: " , mapaCarros.get("Carro1"));
mapaCarros.get("Carro1").AnodeFabricação = 2017; 
console.log("Depois da alteração: " , mapaCarros.get("Carro1"));

const num = new Set([1, 2, 3, 4, 5]); 
console.log(num);