function removerDuplicados(arr: number[]): number [] {
    let arrSemDuplicados:number[] = [];

    arr.forEach((numero) => {
        if (!(arrSemDuplicados.includes(numero))) {
            arrSemDuplicados.push(numero)
        }
    })

    return arrSemDuplicados;
}

function gerarArrayAleatorio(tamanho: number, valorMinimo:number, valorMaximo: number):number[] {
  return Array.from({ length: tamanho }, () => 
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
  );
}

console.log(removerDuplicados([1,2,3,4,5,6,4,7,8,2,7]))

for (let i =0; i < 999999; i++) {
    console.log(removerDuplicados(gerarArrayAleatorio(9999999, 0,10)))
}

export {}