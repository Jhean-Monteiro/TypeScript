function removerDuplicados(arr: number[]): number[] {

    if (arr.length <= 0) return [];
    const arr2 = []

    arr.forEach(f => {
        if (!arr2.includes(f)) {
            arr2.push(f)
        }
    })

    return arr2;

}

console.log(removerDuplicados([1,2,2,2,3,4,5,5,6]))



export default function gerarArrayAleatorio(tamanho: number, min: number, max: number): number[] {
    return Array.from({length: tamanho}, () => Math.floor(Math.random() * (max-min+1)) + min)
}

const arr = gerarArrayAleatorio(100000, 1, 10)

const arrSemDulicados = removerDuplicados(arr)

console.log("antes", arr)
console.log("agora", arrSemDulicados)