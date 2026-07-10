// generic com interface e type alias


// ======== interface =======
interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U
}

// ========== type ===========

type PessoaProtocolo2<T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U
}



// =========== testando interface =========
const aluno:PessoaProtocolo<string, number> = {
    nome: "jhean",
    sobrenome: "monteiro",
    idade: 21
}

const aluno1:PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 21
}

const aluno2:PessoaProtocolo = {
    nome: "jhean",
    sobrenome: "monteiro",
    idade: 21
}


// =========== testando type ==========
const aluno3:PessoaProtocolo2<string, number> = {
    nome: "jhean",
    sobrenome: "monteiro",
    idade: 21
}

const aluno4:PessoaProtocolo2<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 21
}

const aluno5:PessoaProtocolo2 = {
    nome: "jhean",
    sobrenome: "monteiro",
    idade: 21
}

console.log(aluno)
console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)
console.log(aluno5)