// generics em classe

class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa("Luiz", 30)
const pessoa2 = new Pessoa(["Luiz"], {idade: 30})

const pessoa3 = new Pessoa<string, number>("Luiz", 30)




// caso onde o TS não sabe inferir o tipo

class Pilha<T> {
    private contador = 0;
    private elementos: {[k: number]: T} = {}

    push(elemento: T): string {
        this.elementos[this.contador] = elemento
        this.contador++
        return `adicionado ${elemento}`
    }

    pop(): T | void{
        if (this.estaVazia()) return undefined;

        this.contador--
        const elemento = this.elementos[this.contador]
        delete this.elementos[this.contador]
        return elemento
    }

    estaVazia(): boolean {
        return this.contador === 0
    }

    tamanho(): number {
        return this.contador
    }

    mostrarPilha(): void {
        for (const chave in this.elementos) {
            console.log(this.elementos[chave])
        }
    }
}

const pilha = new Pilha<number>()
console.log(pilha.push(1))
console.log(pilha.push(2))
console.log(pilha.push(3))
console.log(pilha.push(4))
console.log(pilha.push(5))

const elemento = pilha.pop() 

pilha.mostrarPilha()
console.log(pilha.pop())
pilha.mostrarPilha()

while (!pilha.estaVazia()) {
    console.log("eliminando: ",pilha.pop())
}