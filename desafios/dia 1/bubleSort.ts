function bubbleSort(arr: number[]): number[] {
    const auxiliar = [...arr]
    
    for (let i = 0; i < auxiliar.length; i++) {

        for (let j = i+1; j < auxiliar.length; j++) {
            if (auxiliar[j] < auxiliar[i]) {
                let valorSeguinte = auxiliar[j];
                auxiliar[j] = auxiliar[i];
                auxiliar[i] = valorSeguinte;
            }
        }
    }
    return auxiliar;
}

console.log(bubbleSort([0,1,4,3,5,7,5,4,2]))
console.log(bubbleSort([8,5,4,9,5,3,6,2,1]))

function gerarArrayAleatorio(tamanho: number, valorMinimo:number, valorMaximo: number):number[] {
  return Array.from({ length: tamanho }, () => 
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
  );
}

for (let i = 0; i < 999999; i++) {
    console.log(bubbleSort(gerarArrayAleatorio(99, 0,99)))
    console.log(bubbleSort(gerarArrayAleatorio(99, 0,99)))
    console.log(bubbleSort(gerarArrayAleatorio(99, 0,99)))
    console.log(bubbleSort(gerarArrayAleatorio(99, 0,99)))
}