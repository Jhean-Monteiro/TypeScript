type Entrada = 
    | string
    | number
    | { tipo: "usuario", nome: string }
    | { tipo: "erro", mensagem: string  }



function processarEntrada(entrada: Entrada): string {
    if (typeof entrada === "string") {
        return `texto em maiúsculo: ${entrada.toUpperCase()}`
    }

    if (typeof entrada === "number") {
        return `número ao quadrado: ${entrada*entrada}`
    }

    if (entrada.tipo === "usuario") {
        return `usuario: ${entrada.nome}`
    }

    return `erro encontrado: ${entrada.mensagem}`
}

console.log(processarEntrada("olá"))
console.log(processarEntrada(5))
console.log(processarEntrada({ tipo: "usuario", nome: "Jhean" }))
console.log(processarEntrada({ tipo: "erro", mensagem: "algo deu errado" }))



type Entrada2 = | string
    | number
    | { tipo: "usuario", nome: string }
    | { tipo: "erro", mensagem: string  }


function  entradaProcessada(entrada:Entrada2): string {
    if (typeof entrada === "string") {
        return `String transformada em array: [${entrada.split('')}]`
    }

    if (typeof entrada === "number") {
        return `raiz quadrada do número ${entrada} é: ${entrada**0.5}`
    }

    if (entrada.tipo === "usuario") {
        return `usuário ${entrada.nome} está atingindo a gnose`
    }

    return `Erro: ${entrada.mensagem}`
}

console.log(entradaProcessada("Luizinho"))
console.log(entradaProcessada(9))
console.log(entradaProcessada({tipo: "usuario", nome: "Demiurgo"}))
console.log(entradaProcessada({tipo: "erro", mensagem: "agora F0d3u"}))


export{}

