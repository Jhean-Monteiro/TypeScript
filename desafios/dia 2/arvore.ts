type No = {
    valor: number
    filhos?: No[] 
}

function somarArvore(no: No): number {
    let soma = no.valor

    if (no.filhos) {
        for (const filho of no.filhos) {
            soma += somarArvore(filho)
        }
    }

    return soma
}

function contarNos(no: No): number {
    let contador = 1
    if (no.filhos) {
        for (const filho of no.filhos) {
            contador += contarNos(filho)
        } 
    }
    return contador
}

function nivelMaisFundo(no:No): number {
    if (!no.filhos || no.filhos.length === 0) return 1

    let maxFilho = 0
    for (const filho of no.filhos) {
        const profundidadeFilho = nivelMaisFundo(filho)
        if (profundidadeFilho > maxFilho) {
            maxFilho = profundidadeFilho
        }
    }

    return 1+maxFilho
}

const arvore: No = {
    valor: 1,
    filhos: [
        { valor: 2, filhos: [{ valor: 4 }, { valor: 5 }] },
        { valor: 3, filhos:  [
        { valor: 2, filhos: [{ valor: 4 }, { valor: 5 }] },
        { valor: 3, filhos:  [
        { valor: 2, filhos: [{ valor: 4 }, { valor: 5 }] },
        { valor: 3, filhos:  [
        { valor: 2, filhos: [{ valor: 40 }, { valor: 5 }] },
        { valor: 3, filhos:  [
        { valor: 2, filhos: [{ valor: 4 }, { valor: 5 }] },
        { valor: 3,}]}]}]}]}]
}

console.log(somarArvore(arvore))
console.log(contarNos(arvore))
console.log(nivelMaisFundo(arvore))

const arvore2: No = {
    valor: 1,
    filhos: [
        { valor: 2, filhos: [{ valor: 4 }, { valor: 5 }] },
        { valor: 3 }
    ]
}

console.log(nivelMaisFundo(arvore2))

export {}