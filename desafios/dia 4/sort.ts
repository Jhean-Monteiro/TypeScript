type Produto = { nome: string, preco: number, categoria: string }

const produtos: Produto[] = [
    { nome: "Mouse", preco: 50, categoria: "periféricos" },
    { nome: "Teclado", preco: 150, categoria: "periféricos" },
    { nome: "Monitor", preco: 800, categoria: "monitores" },
    { nome: "Webcam", preco: 200, categoria: "periféricos" },
]

function ordenarPorPreco(produtos: Produto[], crescente:boolean): Produto[] {
    const copia = [...produtos]

    return copia.sort((a,b) => {
        if (crescente) {
            return a.preco - b.preco
        }
        return b.preco - a.preco
    })
}

console.log(ordenarPorPreco(produtos, true))


console.log(ordenarPorPreco(produtos, false))



export{}