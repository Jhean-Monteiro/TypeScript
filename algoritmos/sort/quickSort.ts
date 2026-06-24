function quickSort(arr: number[]): number[] {
    // caso base: se o array tiver 0 ou 1 elemento, ele já está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    const pivo = arr[arr.length-1];

    // arrays auxiliares para separar os elementos
    const menores: number[] = [];
    const maiores: number[] = [];

    // passa por todo o array, menos o pivo que é o último
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i]! < pivo!) {
            menores.push(arr[i]!);
        } else {
            maiores.push(arr[i]!);
        }
    }

    // junta tudo recursivamente.
    return [...quickSort(menores)!, pivo!, ...quickSort(maiores)!]
}


export default function gerarArrayAleatorio(tamanho: number, min: number, max: number): number[] {
    return Array.from({length: tamanho}, () => Math.floor(Math.random() * (max-min+1)) + min)
}


const listaDesordenada = gerarArrayAleatorio(5000,1,1000)

const listaOrdenada = quickSort(listaDesordenada);

console.log("Original:", listaDesordenada);
console.log("Ordenada:", listaOrdenada);