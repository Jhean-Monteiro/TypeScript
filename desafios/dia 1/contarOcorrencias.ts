type ValorRecord = Record<string, number>



function contarOcorrencias(arr: string[]): ValorRecord {
    const retornavel: ValorRecord = {}
    
    for (const palavra of arr) {
        if (retornavel[palavra] === undefined) {
            retornavel[palavra] = 1
        } else {
            retornavel[palavra]++        }
    }

    return retornavel
}

console.log(contarOcorrencias(["a", "b", "a", "c", "b", "a"]))
console.log(contarOcorrencias(["banana", "apple", "banana"]))

export{}