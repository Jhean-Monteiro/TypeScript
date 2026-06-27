type Seila = Record<string, number>

function contarOcorrencias(arr: string[]): Seila {
    const retornavel: Seila = {}

    arr.forEach(n => {
        if (retornavel[n] === undefined){
            retornavel[n] = 1
        } else {
            retornavel[n]++
        }
    })

    return retornavel;
}


console.log(contarOcorrencias(["a", "e", "i", "a", "o", "e", "u", "i", "a"]))