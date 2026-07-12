type Produto = {
    nome: string
    preco: number
    emEstoque: boolean
}

const produto: Produto = {
    nome: "Teclado",
    preco: 250,
    emEstoque: true
}

const { nome: nomeDoProduto, preco: precoDoProduto, emEstoque } = produto

const frutas = ["maçã", "banana", "laranja"]
const [primeira, segunda] = frutas

console.log(nomeDoProduto, precoDoProduto, emEstoque, primeira, segunda)


type Config = {
    tema: string
    idioma?: string // opcional
}
const config:Config = {tema: "escuro"}
const {tema, idioma = "PT-BR"} = config
console.log(tema, idioma)


type Personagem = {
    nome?: string,
    classe?: string,
    nivel?: number
}

const personagem: Personagem = {
    nome: "Elyel",
    classe: "Mago"
}

const {nome: nomeDoHeroi = "Marty", nivel = 999} = personagem

console.log(nomeDoHeroi, nivel)



export { }