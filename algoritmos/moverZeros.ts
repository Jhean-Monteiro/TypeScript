function moverZeros(numeros: number[]): number[] {

    let zeros: number[] = []
    let arr2: number[] = []
    numeros.forEach(n => { // coloca o arr2 sem zeros
        if (n === 0) {
            zeros.push(n)
        } else {
            arr2.push(n)
        }
    })

    for (let zero of zeros) {
        arr2.push(zero) // em seguida insere os zeros ao final
    }

    return arr2;
}


function gerarArrayAleatorio(tamanho: number, min: number, max: number): number[] {
    return Array.from({length: tamanho}, () => Math.floor(Math.random() * (max-min+1)) + min)
}

console.log(moverZeros(gerarArrayAleatorio(100, 0, 5)))

console.log(moverZeros([0, 1, 0, 3, 12])); 
// Deve exibir: [1, 3, 12, 0, 0]

console.log(moverZeros([4, 0, 5, 0, 0, 1])); 
// Deve exibir: [4, 5, 1, 0, 0, 0]

console.log(moverZeros([0, 0, 0])); 
// Deve exibir: [0, 0, 0]

console.log(moverZeros(gerarArrayAleatorio(10000, 0, 5)))