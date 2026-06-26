type Estoque = Record<string, number>

const estoque: Estoque = {
    "mouse": 500
}

function adicionarProduto(estoque:Estoque, nome: string, quantidade:number): Estoque {
    return {...estoque, [nome]: quantidade}
}

function totalItens(estoque: Estoque): number {
    let total = 0;
    for (const quantidade of Object.values(estoque)){
        total+=quantidade
    }
    return total
}

function testeDeExtresse2() {
    let i = 1;
    let produto: Estoque = {}
    while (i < 9999999) {
        produto = adicionarProduto(produto, "sla", i);
        console.log(produto)
        console.log(totalItens(produto))
        i++
    }
}

testeDeExtresse2()