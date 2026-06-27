function maisFrequente(arr: number[]): number {

    const contagem: Record<number, number> = {}

    for (const n of arr) {
        contagem[n] = (contagem[n] ?? 0) + 1
    }

    let melhor = arr[0]

    for (const n of arr) {
        if (
            contagem[n] > contagem[melhor] || (contagem[n] === contagem[melhor] && n < melhor) 
        ) {
            melhor = n
        }
    }

    

    return melhor
}

console.log(maisFrequente([1, 2, 2, 3, 3, 3]))
console.log(maisFrequente([1, 2, 2, 3, 3, 3,4,4,4,4,4,1,1,1,1]))