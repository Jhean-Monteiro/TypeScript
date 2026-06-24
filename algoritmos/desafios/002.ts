interface Produto {
    nome: string,
    preco: number,
    disponivel: boolean
}

const exibirProduto = (produto: Produto): string => {
    let vOuF = produto.disponivel === true ? "e está disponível" : "mas infelizmente não o temos em estoque no momento"
    return `O produto: ${produto.nome} custa ${produto.preco}R$. ${vOuF}`
}

console.log(exibirProduto({nome: "Mouse", preco:150, disponivel:false}))
console.log(exibirProduto({nome: "Bandeclay", preco:50, disponivel:true}))