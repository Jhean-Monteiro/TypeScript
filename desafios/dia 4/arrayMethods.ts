type Produto = { nome: string, preco: number, categoria: string }

const produtos: Produto[] = [
    { nome: "Mouse", preco: 50, categoria: "periféricos" },
    { nome: "Teclado", preco: 150, categoria: "periféricos" },
    { nome: "Monitor", preco: 800, categoria: "monitores" },
    { nome: "Webcam", preco: 200, categoria: "periféricos" },
]

function filtrarArray(produtos: Produto[], categoria:string) {
    return produtos.filter(p => p.categoria === categoria)
}



function retornaNomes(produtos:Produto[]):string[] {
    return produtos.map(p => p.nome)
}

function valorTotal(produtos:Produto[]): number {
    return produtos.reduce((acc, p) => acc + p.preco, 0)
}

console.log(filtrarArray(produtos, "periféricos"))
console.log(retornaNomes(produtos))
console.log(valorTotal(produtos))


function precoTotalPerifericos(produtos:Produto[], periferico:string):number {
    let int = produtos
                .filter(p => p.categoria === periferico)
                .reduce((ac,p) => ac += p.preco, 0)
    return int
}
console.log(precoTotalPerifericos(produtos, "monitores"))
console.log(precoTotalPerifericos(produtos, "periféricos"))


export{}