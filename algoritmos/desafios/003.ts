type Usuario = {
    nome: string,
    email: string,
    idade: number,
    apelido?: string
}

const saudar = (usuario: Usuario): string => {
    if (!usuario.apelido) {
        return `Olá, ${usuario.nome}! Seu email é ${usuario.email}`
    }

    return `Olá, ${usuario.nome} (${usuario.apelido})! Seu email é ${usuario.email}`
}

const usuario1: Usuario = {
    nome: "Luiz",
    email: "Luiz@email.com",
    idade: 20,
    apelido: "Luizinho"
}

const usuario2: Usuario = {
    nome: "Jhean",
    email: "Jhean@email.com",
    idade: 21,
}

console.log(saudar(usuario1))
console.log(saudar(usuario2))