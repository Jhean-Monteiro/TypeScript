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

export {}