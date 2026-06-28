type Pilha = {
    itens: number[],
    empilhar: (item: number) => void,
    desempilhar: () => void,
    topo: () => number | undefined,
    tamanho: () => number
    exibir: () => void
}

const novapilha: Pilha = {
    itens: [],
    empilhar: (item: number) => {
        novapilha.itens.push(item)
    },
    desempilhar: () => {
        novapilha.itens.pop()
    },
    topo: () => {
        return novapilha.itens[novapilha.itens.length-1]
    },
    tamanho: () => {
        return novapilha.itens.length
    },
    exibir: () => {
        novapilha.itens.forEach(i => {
            console.log(`[${i}]`)
        })
    }
}

novapilha.empilhar(1)
novapilha.empilhar(2)
novapilha.empilhar(3)
novapilha.empilhar(4)
novapilha.empilhar(5)
novapilha.exibir()
novapilha.desempilhar()
novapilha.exibir()
console.log(novapilha.topo())



type Fila = {
    itens: number[],
    enfileirar: (item: number) => string,
    desenfileirar: () => string,
    tamanho: () => number
    exibir: () => void
}

const fila: Fila = {
    itens: [],
    enfileirar: (item: number) => {
        fila.itens.push(item)
        return `Enfileirado: ${item}`
    },
    desenfileirar: () => {
        let saiu = fila.itens[fila.itens.length-fila.itens.length]
        fila.itens.shift()
        return `Desenfileirado: ${saiu}`
    },
    tamanho: () => {
        return fila.itens.length
    },
    exibir: () => {
        fila.itens.forEach(i => {
            console.log(`[${i}]`)
        })
    }
}

console.log(fila.enfileirar(10))
console.log(fila.enfileirar(20))
console.log(fila.enfileirar(30))
console.log(fila.enfileirar(40))
console.log(fila.enfileirar(50))
console.log(fila.enfileirar(60))
console.log(fila.desenfileirar())
console.log(fila.desenfileirar())
fila.exibir()


export {}