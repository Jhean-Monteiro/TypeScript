function fibonacci(n: number): number[] {
    const resultado: number[] = [0, 1]

    for (let i = 2; i < n; i++) {
        const anterior = resultado[i - 1] // pega o ultimo
        const anteAnterior = resultado[i - 2] // pega o penúltimo
        resultado.push(anterior + anteAnterior)
    }

    return resultado.slice(0, n)
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(10))
console.log(fibonacci(11))
console.log(fibonacci(12))
console.log(fibonacci(120))
console.log(fibonacci(60))
console.log(fibonacci(30))
console.log(fibonacci(3000))
console.log(fibonacci(99999))