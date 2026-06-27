function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr
    }

    let esquerda: number[] = []
    let direita: number[] = []
    let pivo = arr[arr.length-1]
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivo) {
            esquerda.push(arr[i])
        } else {
            direita.push(arr[i])
        }
    }

    return [...quickSort(esquerda), pivo!, ...quickSort(direita)]
}


function buscaBinaria(arr: number[], alvo: number): number {
    let inicio = 0
    let fim = arr.length-1

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)
        
        if (arr[meio] === alvo) return meio

        if (alvo < arr[meio]) {
            fim = meio-1
        } else {
            inicio = meio+1
        }
    }

    return -1
} 




console.log(buscaBinaria(quickSort([1,5,4,3,8,9]), 4))

console.log(buscaBinaria([1,2,3,4,5,6,7], 5))

export {}