class Produto {
    static totalCriadodo: number = 0
    static somaPreco: number = 0

    constructor(private nome: string, private preco: number) {
        if (new.target) {
            Produto.totalCriadodo++
            Produto.somaPreco += this.preco
        }
    }

    static precoMedio() {
        return Produto.somaPreco/Produto.totalCriadodo
    }
}

const a = new Produto("Mouse", 50)
const b = new Produto("Teclado", 150)
const c = new Produto("Monitor", 800)

console.log(Produto.totalCriadodo)  // → 3
console.log(Produto.precoMedio())  // → 333.33...

export{}