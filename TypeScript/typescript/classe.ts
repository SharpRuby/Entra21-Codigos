class Livro {
    private _titulo: string; 
    private _autor: string; 
    private _numerosDePaginas: number; 

    constructor(titulo: string, autor: string, numeroDePaginas: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._numerosDePaginas = numeroDePaginas;
    }

    get titulo(): string {
        return this._titulo
    } 

    set titulo(titulo : string) {
        this._titulo = titulo; 
    }

    detalhes(): void {
        console.log(`O nome do livro é ${this._titulo}, do ${this._autor} e tem ${this._numerosDePaginas} páginas.`);
    }
}

const livro = new Livro("Código Limpo", "Fulano", 350)
livro.detalhes(); 
console.log(livro.titulo);
livro.titulo = "Fulaninho"; 
livro.detalhes(); 