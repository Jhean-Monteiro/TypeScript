type Admin = {
    nome:string
    permissoes: string[]
}

type Usuario = {
    nome: string,
    email: string
}

function descreverUsuario(us: Admin | Usuario) {
    if ("permissoes" in us) {
        return `Admin: ${us.nome}, permissoes: [${us.permissoes.join(", ")}]`
    }

    return `Usuário: ${us.nome}, email: ${us.email}`
}

const usuario:Usuario = {
    nome: "Jhean",
    email: "jhean@email.com"
}

const admin:Admin = {
    nome: "Jackson",
    permissoes: ["1", "2", "3", "4"]
}

console.log(descreverUsuario(usuario))
console.log(descreverUsuario(admin))

export{}