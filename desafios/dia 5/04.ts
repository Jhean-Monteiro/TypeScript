type Estoque = Record<string, number>

function adicionar(estoque: Estoque, produto: string, quantidade: number): Estoque {
    return {
        ...estoque,
        [produto]: (estoque[produto] ?? 0) + quantidade
    }
}

function remover(estoque: Estoque, produto: string, quantidade: number): Estoque {
    const novo = {...estoque}
    novo[produto] -= quantidade
    return novo
}

function total(estoque: Estoque): number {
    let soma = 0
    for (const produto in estoque) {
        soma += estoque[produto]
    }
    return soma
}

let estoque: Estoque = {}

let produto1 = "mouse"
let produto2 = "teclado"

estoque = adicionar(estoque, produto1, 20)
estoque = adicionar(estoque, produto2, 10)
estoque = remover(estoque, produto1, 5)

console.log(total(estoque))

let pipa = "pipa"
estoque[pipa] = 10




console.log(estoque)

for (let i in estoque) {
    console.log([i])
    console.log(i)
}

let outro = {
    ...estoque,
    "pipa": 20,
    'teste': 900
}
console.log(outro)