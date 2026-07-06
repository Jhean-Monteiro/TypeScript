export class Empresa {
    public readonly nome: string
    private readonly colaboradores: Colaborador[] = []
    protected readonly CNPJ: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.CNPJ = cnpj
    }

    public AdicionaColaborador(colaborador: Colaborador) {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador)
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string
    ) {

    }
}

const empresa1 = new Empresa("Udemy", "12.123.123/1234-12")
console.log(empresa1)

// empresa1.nome = "Facebook"
console.log(empresa1.nome)

const colaborador1 = new Colaborador("Jhean", "Monteiro")
const colaborador2 = new Colaborador("Zé", "Da Manga")
const colaborador3 = new Colaborador("Joe", "of Mango")
empresa1.AdicionaColaborador(colaborador1)
empresa1.AdicionaColaborador(colaborador2)
empresa1.AdicionaColaborador({nome:"Jhean", sobrenome:"Silva"})

console.log(empresa1)
empresa1.mostrarColaboradores()
