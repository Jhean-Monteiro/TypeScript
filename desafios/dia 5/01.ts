type Funcionario = {
    readonly id: number
    nome: string
    email: string
    salario: number
    senha: string
    cargo: string
}

type FuncionarioPublico = Omit<Funcionario, "salario" | "senha">

type FuncionarioResumido = Pick<Funcionario, "id" | "nome">

type FuncinarioEditavel = Omit<Funcionario, "id">



const jhean: Funcionario = {
    id: 1,
    nome: "Jhean",
    email: "jhean@email.com",
    salario: 3000,
    senha: "123456",
    cargo: "Dev Jr"
}


function atualizarFuncionario(funcionario: Funcionario, campos: Partial<FuncinarioEditavel>) {
    const funcionarioEditado = {
        ...funcionario,
        ...campos
    }
    return funcionarioEditado
}

console.log(jhean)

const resultado = atualizarFuncionario(jhean, { salario: 5000, cargo: "Dev Pleno" })
console.log(resultado)