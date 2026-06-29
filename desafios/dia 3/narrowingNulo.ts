type Usuario = {
    id: number,
    nome: string,
    email: string
}

const banco: Usuario[] = [
    { id: 1, nome: "Jhean", email: "jhean@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "Jenyfer", email: "jenyfer@email.com" },
]


function buscarUsuario(id: number): Usuario | null {
    for (const usuario of banco) {
        if (usuario.id === id) {
            return usuario
        }
    }
    return null
}

function exibirUsuario(id:number): string {
    let resultado = buscarUsuario(id)

    if (resultado === null) return "Usuário não encontrado"
    return `usuario: ${resultado?.nome} - ${resultado?.email}`
}

banco.forEach(usuario => {
    console.log(exibirUsuario(usuario.id))
})
console.log(exibirUsuario(4))

export{}