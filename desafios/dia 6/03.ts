class Produto {
    constructor(public readonly nome: string, private preco: number, private estoque: number) {}

    getPreco() {
        return this.preco
    }

    adicionarEstoque(quantidade: number) {
        this.estoque += quantidade
    }

    removerEstoque(quantidade: number) {
        this.estoque -= quantidade
        if (this.estoque < 0) this.estoque = 0
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
// mouse.estoque = 0
console.log(mouse.disponivel())

// mouse.nome = "PC"
// mouse.preco = 100

console.log(mouse.getPreco())
mouse.adicionarEstoque(5)
mouse.removerEstoque(20)
console.log(mouse.descricao())

export {}