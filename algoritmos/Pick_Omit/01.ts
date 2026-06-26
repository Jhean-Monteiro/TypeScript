type Funcionario = {
    id: number
    nome: string
    cargo: string
    salario: number
    senha: string
}

type FuncionarioPublico = Omit<Funcionario, "salario" | "senha">

type FuncionarioResumido = Pick<Funcionario, "id" | "nome">

function retornaFuncResumido(funcionario:Funcionario): FuncionarioResumido  {
    const resumido:FuncionarioResumido = {
            id: funcionario.id,
            nome: funcionario.nome
    }
    return resumido;
}

function retornaFuncPublico(funcionario:Funcionario): FuncionarioPublico  {
    const publico:FuncionarioPublico = {
            id: funcionario.id,
            nome: funcionario.nome,
            cargo: funcionario.cargo
    }
    return publico;
}


function testeDeExtresse1() {
    let i = 0;

    while (i < 2999999) {
        
        let r = 3
        if (i % 3 === 0) {
            r = 2;
        }

        const novoFuncionario:Funcionario = {
            id: i,
            nome: `Pessoa${i}`,
            cargo: `Numero ${i*r}`,
            salario: 700*r,
            senha: "jujujuju"
        } 
        console.log(retornaFuncPublico(novoFuncionario))
        console.log(retornaFuncResumido(novoFuncionario))

        i++;
    }
}

testeDeExtresse1()
testeDeExtresse1()
testeDeExtresse1()