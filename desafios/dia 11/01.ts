interface PessoaRequired {
    nome: string, sobrenome: string, idade: number
}
type PessoaReadonly = Readonly<PessoaRequired>

const p: PessoaReadonly = {
    nome: "Jhean", sobrenome: "Silva", idade: 25
}



// interface genérica
interface PessoaProtocolo<T, U> {
    nome: T;
    sobrenome: T;
    idade: U;
}

// type alias genérico
type PessoaProtocolo2<T, U> = {
    nome: T;
    sobrenome: T;
    idade: U;
}

// ambos funcionam igual na prática
const pp: PessoaProtocolo<string[], string> = {
    nome: ["Jhean"], sobrenome: ["Monteiro"], idade: "21"
}


type Adder = {
    (x: number): number
    (x: number, y: number): number
    (...arg: number[]): number
}

const adder: Adder = (x, y?, ...args) => {
    if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y as number || 0)
    return x + (y as number || 0)
}


console.log(adder(4,3))

type NomeCompleto = {
    (nome: string): string
    (nome: string, sobrenome: string): string
    (...arg: string[]): string
}

const  devolveNome: NomeCompleto = (nome: string, sobrenome?: string, ...args) => {

    if (args[2]) {

        const todosOsNomes = [nome, sobrenome, ...args].join(" ");
        return `Oi ${todosOsNomes}`;

    } else if (sobrenome !== undefined) { // existe
        return "Oi " + nome + " " + sobrenome
    }
    return nome
}
console.log(devolveNome("luiz", "henrique", "da", "silva", "santos"))

console.log(devolveNome("Jhean", "Monteiro"))

console.log(devolveNome("Adamastor"))


const objeto = {
    chave: "chave",
    chave2: "chave 2"
}

type Tipo = typeof objeto
type Keys = keyof Tipo

if ("chave2" in objeto) {
    console.log("Oi", objeto.chave2)
}

const pessoa: Record<number, string> = {
    1: "pedro",
    2: "silva"
}

pessoa[1] ?? "pedrooo" // ✅ funciona
pessoa[3] = "novo" 
pessoa[5] ??= "pedrooo"
pessoa[5] ??= "lucas" // como já existe (não é undefined), não faz nada

console.log(pessoa)

type Nome = Readonly<string>

const nome:Nome =  "Jhean"
let noo:Nome = nome
console.log(noo)
noo = "Monteiro"
console.log(noo)