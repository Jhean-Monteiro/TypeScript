/*
let status: string = ""
if (entregue) {
    status = "sim"
} else {
    status = "não"
}

// com ternário — mesma coisa, uma linha
const status = entregue ? "sim" : "não"
*/

type Produto = {
    nome: string
    preco: number
    estoque: boolean
}

export const produto: Produto = { nome: "Monitor", preco: 1200, estoque: false }

export let {nome, preco, estoque} = produto

let mensagem = estoque ? "Disponivel" : "Indisponivel"

let categoria = (preco > 1000) ? "Premium" : "Standard"

console.log(mensagem, categoria)

preco = 900
estoque = true

mensagem = estoque ? "Disponivel" : "Indisponivel"
categoria = (preco > 1000) ? "Premium" : "Standard"

console.log(mensagem, categoria)



