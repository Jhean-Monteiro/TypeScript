function gerarAnagramas(str: string): string[] {
    if (str.length <= 1) return [str]

    const resultado: string[] = []

    for (let i = 0; i < str.length; i++) {
        const letra = str[i]
        const restante = str.slice(0, i) + str.slice(i+1)
        const anagramasDoRestante =  gerarAnagramas(restante)

        for (const anagrama of anagramasDoRestante) {
            resultado.push(letra + anagrama)
        }
    }

    return [... new Set(resultado)]
}

console.log(gerarAnagramas("jhean"))