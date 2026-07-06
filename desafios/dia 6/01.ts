class Produto {
    nome: string
    preco: number
    estoque: number
    constructor(nome: string, preco: number, estoque: number) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
 
    descricao(): string {
        return `${this.nome}: ${this.preco} (${this.estoque} em estoque)`
    }

    disponivel(): boolean {
        return this.estoque > 0
    }
}

const mouse = new Produto("Mouse", 50, 10)
console.log(mouse.descricao())
console.log(mouse.disponivel())
mouse.estoque = 0
console.log(mouse.disponivel())