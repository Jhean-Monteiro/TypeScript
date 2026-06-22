class ErroEscolar extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ErroEscolar"
    }
}

class ErroTipoInvalido extends ErroEscolar {
    constructor(message:string) {
        super(message);
        this.name = "ErroTipoInvalido"
    }
}

class ErroPessoaNaoEncontrada extends ErroEscolar {
    constructor(message:string) {
        super(message);
        this.name = "ErroPessoaNaoEncontrada"
    }
}

// composição
class Disciplina {
    // em vez de "#" do JS moderno, o TS usa a palavra "private"
    private nome: string;
    private nota: number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

    public toString(): string {
        return `[Disciplina] ${this.nome} - Nota: ${this.nota}`
    }
}

// A palavra "abstract" existe no TS. não precisa fazer aquele "if (new target === Pessoa) throw new error" no constructor
// o proprio typescript proíbe criar um 'new Pessoa' direto.
abstract class Pessoa {
    private nome: string;
    private matricula: string;
    private disciplinas: Disciplina[]; // tipando como array de objetos Disciplina

    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.disciplinas = []; // composição
    }

    // usa "public get" para permitir leitura de propriedades privadas
    public get nomePessoa(): string {
        return this.nome;
    }

    public get matriculaPessoa(): string {
        return this.matricula;
    }

    public adicionarDisciplina(disciplina: Disciplina): void {
        // O TypeScript já garante que "disciplina" será da classe Disciplina.
        // Não precisa mais fazer "if (!(disciplina instanceof Disciplina))" para validar o tipo!
        this.disciplinas.push(disciplina);
    }

    public listarDisciplinas(): string {
        if (this.disciplinas.length === 0) return "Nenhuma disciplina cadastrada";

        return this.disciplinas.map(d => d.toString()).join("\n");
    }

    // métodos abstratos também são nativos!
    // colocamos "abstract" na frente e não abrimos chaves {}
    // isso obriga as classes filhas a criarem esse método, sem precisarmos lançar erros manuais.
    abstract exercerFuncao(): string;

    public toString(): string {
        return `[Matricula: ${this.matricula}] ${this.nome}`;
    }
}

// herança
class Professor extends Pessoa {
    private areaDeAtuacao: string;

    constructor(nome: string, matricula: string, areaDeAtuacao: string) {
        super(nome, matricula);
        this.areaDeAtuacao = areaDeAtuacao;
    }

    // implementação obrigatória do método abstrato (polimorfismo)
    public exercerFuncao(): string {
        return `Professor(a) ${this.nomePessoa} está dando aula de ${this.areaDeAtuacao}.`;
    }
}

class Aluno extends Pessoa {
    private anoEscolar: string;

    constructor(nome: string, matricula: string, anoEscolar: string) {
        super(nome, matricula);
        this.anoEscolar = anoEscolar
    }

    public exercerFuncao(): string {
        return `Aluno(a) ${this.nomePessoa} do ${this.anoEscolar} está assistindo aula e fazendo anotações.`;
    }
}

// agregação

class Escola {
    private nomeDaEscola: string;
    private pessoas: Pessoa[]; // Array que aceita qualquer subclasse de Pessoa

    constructor(nomeDaEscola: string) {
        this.nomeDaEscola = nomeDaEscola;
        this.pessoas = [];
    }

    public get listaDePessoas(): Pessoa[] {
        return this.pessoas;
    }

    // o TS garante que apenas Alunos ou professores (que herdam de Pessoa) entrem aqui
    public matricularOuContratar(pessoa: Pessoa): void {
        this.pessoas.push(pessoa);
    }

    public desligar(pessoa: Pessoa): void {
        const index = this.pessoas.indexOf(pessoa);
        if (index === -1) {
            throw new ErroPessoaNaoEncontrada(`A pessoa '${pessoa.nomePessoa}' não possui vinculo com a instituição.`);
        }
        this.pessoas.splice(index, 1);
    }

    public listarTodos(): string {
        if (this.pessoas.length === 0) return "A escola está vazia.";
        return this.pessoas.map(p => p.toString()).join("\n");
    }
}



console.log("========= DEMONSTRAÇÃO TYPESCRIPT =========");

// criando os objetos
const prof = new Professor("Alan Turing", "PRF-01", "Computação");
const aluno1 = new Aluno("Ada Lovelace", "ALU-01", "3º Ano")


// Adicionando Disciplinas (Composição)
aluno1.adicionarDisciplina(new Disciplina("Lógica de Programação", 10.0));
aluno1.adicionarDisciplina(new Disciplina("Matemática Discreta", 9.5));


// criando a escola (agregação)
const instituto = new Escola("Instituto de Tecnologia");
instituto.matricularOuContratar(prof);
instituto.matricularOuContratar(aluno1);


// listagem e Polimorfismo
console.log("------ Vínculos da Escola ------");
console.log(instituto.listarTodos());

console.log("\n--- Composição (Disciplinas da Ada) ---");
console.log(aluno1.listarDisciplinas())

console.log("\n--- Polimorfismo ---");
instituto.listaDePessoas.forEach(p => {
    console.log(p.exercerFuncao())
});


// tratamento de erros no TS
console.log("\n--- Teste de Exceções ---");
try {
    const alunoFato = new Aluno("Fantasma", "ALU-99", "1º Ano");
    instituto.desligar(alunoFato); // não foi matriculado
} catch (e: any) {
    console.log(`[ERRO CAPTURADO] -> ${e.message}`);
}