import gerarArrayAleatorio from "./quickSort"

function bubbleSort(arr: number[]): number[] {
    const tamanho = arr.length;

    for (let i = 0; i<tamanho; i++) {
        for (let j = 0; j < tamanho - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temporario = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temporario;
            }
        }
    }

    return arr;
}

const dArray = gerarArrayAleatorio(10000, 1, 10000)

const oArray = bubbleSort(dArray)

console.log(oArray)