// Destructuring em parâmetros de função: o mais importante pro react
type Produto = {
    nome: string
    preco: number
    emEstoque: boolean
}

/* sem destructuring no parâmetro
function exibirProduto(produto: Produto) {
    console.log(produto.nome)
    console.log(produto.preco)
}
*/

// com destructuring no parâmetro — mais limpo
function exibirProduto({ nome, preco }: Produto) {
    console.log(nome)
    console.log(preco)
}

// No React, toda vez que você cria um componente com props, é exatamente esse padrão:
/* um componente React recebe as props assim:
function CartaoDeUsuario({ nome, idade }: User) {
    return `${nome} tem ${idade} anos`
}
*/




// ======= praticando ========
type Pedido = {
    cliente: string
    total: number
    entregue: boolean
}



(function resumirPedido({ cliente, total, entregue }: Pedido) {
    const status = entregue ? "sim" : "não"
    console.log(`Cliente: ${cliente} / total: R$${total} / entregue? ${status}`)
})({cliente: "Pedro", total: 20, entregue: true})


export {}