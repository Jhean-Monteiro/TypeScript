abstract class Funcionario {
    nome: string
    salario: number
    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }

    abstract apresentar(): string
}

class Desenvolvedor extends Funcionario {
    linguagem: string
    constructor(nome: string, salario: number, linguagem: string) {
        super(nome, salario)
        this.linguagem = linguagem
    }

    apresentar() {
        return `Dev: ${this.nome}, ${this.salario} - ${this.linguagem}`
    }
}


class Gerente extends Funcionario {
    time: number
    constructor(nome: string, salario: number, time: number) {
        super(nome, salario)
        this.time = time
    }

    apresentar() {
        return `Gerente: ${this.nome}, ${this.salario} - time de ${this.time}`
    }
}



const dev = new Desenvolvedor("Jhean", 5000, "TypeScript")
console.log(dev.apresentar())

const ger = new Gerente("Maria", 8000, 10)
console.log(ger.apresentar())