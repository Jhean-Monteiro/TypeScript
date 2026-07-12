import { produto, nome, preco, estoque } from './05'

// ternário dentro de template string: (comum no react)
console.log(`teste ${nome}: ${preco > 1000 ? "Premium" : "Standard"} | ${estoque ? "Disponível" : "Indisponível"}`)

/*
Ternário aninhado
Dá pra encadear, mas use com moderação — fica difícil de ler rápido:

*/
const faixa = preco > 2000 ? "Alto" : preco > 1000 ? "Médio" : "Baixo"




type Usuario = {
    nome: string
    idade: number
    assinante: boolean
}

const usuario: Usuario = { nome: "Jhean", idade: 21, assinante: true }

const faixaEtaria = usuario.idade < 18? "menor" : usuario.idade < 60 ? "adulto" : "sênior"

console.log(`${usuario.nome} / ${faixaEtaria} / plano: ${usuario.assinante ? "premium" : "gratuito"}`)