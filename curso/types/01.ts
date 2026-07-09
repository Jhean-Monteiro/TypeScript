function add(a: unknown, b: unknown): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b
    
    return `${a}${b}`
}

console.log(add(1, 8))
console.log(add("1", "8"))


type Pessoa = {
    tipo: "pessoa"
    nome: string
}
type Animal = {
    tipo: "animal"
    cor: string
}
type PessoaOuAnimal = Pessoa | Animal

class Aluno implements Pessoa {
    tipo: "pessoa" = "pessoa"
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {

    switch(obj.tipo) {
        case "pessoa":
            console.log(obj.nome);break;
        case "animal":
            console.log("isso é um animal"); break;
    }


    if ("nome" in obj) {
        console.log(obj.nome); return;
    } 
    if ("cor" in obj) console.log(obj.cor); return;
}

mostraNome(new Aluno("Zé da Manga"))

let animal:Animal = {
    tipo: "animal",
    cor: "vermelho"
}
mostraNome(animal)

export{}