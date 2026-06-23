const buscaBinaria = (arr: number[], alvo: number): string  => {
    let inicio = 0
    let fim = arr.length-1;

    while (fim >= inicio) {
        const meio = Math.floor((inicio + fim)/2)

        if (arr[meio] === undefined) break;

        if (arr[meio] === alvo) {
            return `Alvo encontrado no indice ${meio} da lista`
        }

        if (arr[meio] < alvo) {
            inicio = meio+1;
        } else {
            fim = meio-1
        }
    }
    return "alvo não encontrado"
}

const a = buscaBinaria([1,2,3,4,5,6,7,8,9,0], 4)

console.log(a)


const b = buscaBinaria([1,2,3,4,5,6,7,8,9,0], 8)

console.log(b)