type Genero = "ficcao" | "fantasia" | "terror" | "romance"

abstract class ItemBiblioteca {
    constructor(
        protected readonly _titulo: string,
        public readonly anoPublicacao: number
    ) {}

    get titulo() { return this._titulo }

    abstract descricao(): string

    idade(): number {
        return 2026 - this.anoPublicacao
    }
}

class Livro extends ItemBiblioteca {
    constructor(
        titulo: string,
        anoPublicacao: number,
        public readonly autor: string,
        public readonly genero: Genero
    ) {
        super(titulo, anoPublicacao)
    }

    descricao(): string {
        return `${this.titulo} - ${this.autor} (${this.genero}, ${this.anoPublicacao}) - ${this.idade()} anos`
    }
}

class Revista extends ItemBiblioteca {
    constructor(
        titulo: string,
        anoPublicacao: number,
        public readonly edicao: number
    ) {
        super(titulo, anoPublicacao)
    }

    descricao(): string {
        return `${this.titulo} - Edição ${this.edicao} (${this.anoPublicacao}) - ${this.idade()} anos`
    }
}

class Biblioteca {
    private itens: ItemBiblioteca[] = []
    static totalCadastrados: number = 0

    adicionar(item: ItemBiblioteca): void {
        this.itens.push(item)
        Biblioteca.totalCadastrados++
    }

    listar(): void {
        for (const item of this.itens) {
            console.log(item.descricao())
        }
    }

    buscarPorTitulo(titulo: string): ItemBiblioteca | undefined {
        return this.itens.find(item => item.titulo === titulo)
    }

    filtrarPorGenero(genero: Genero): Livro[] {
        return this.itens
            .filter(item => item instanceof Livro && item.genero === genero) as Livro[]
    }

    livroMaisAntigo(): Livro | undefined {
        const livros = this.itens.filter(item => item instanceof Livro) as Livro[]
        if (livros.length === 0) return undefined
        return livros.reduce((maisAntigo, livro) =>
            livro.anoPublicacao < maisAntigo.anoPublicacao ? livro : maisAntigo
        )
    }

    relatorio(): void {
        const livros = this.itens.filter(item => item instanceof Livro) as Livro[]
        const revistas = this.itens.filter(item => item instanceof Revista) as Revista[]
        const maisAntigo = this.livroMaisAntigo()

        console.log("=== Relatório da Biblioteca ===")
        console.log(`Total de itens: ${this.itens.length}`)
        console.log(`Livros: ${livros.length}`)
        console.log(`Revistas: ${revistas.length}`)
        if (maisAntigo) {
            console.log(`Livro mais antigo: ${maisAntigo.titulo} (${maisAntigo.anoPublicacao})`)
        }
    }
}

const biblioteca = new Biblioteca()
biblioteca.adicionar(new Livro("Duna", 1965, "Frank Herbert", "ficcao"))
biblioteca.adicionar(new Livro("O Hobbit", 1937, "Tolkien", "fantasia"))
biblioteca.adicionar(new Revista("National Geographic", 1985, 42))

biblioteca.listar()
console.log("Total:", Biblioteca.totalCadastrados)
console.log(biblioteca.buscarPorTitulo("Duna"))
console.log(biblioteca.filtrarPorGenero("ficcao"))
biblioteca.relatorio()

export {}