function moverZeros(arr: number[]): number[] {
    const arrayAuxiliar1: number[] = []
    const arrayAuxiliarComZeros: number[] = []

    arr.map(numero => {
        if (numero === 0) {
            arrayAuxiliarComZeros.push(numero)
        } else {
            arrayAuxiliar1.push(numero)
        }
    })

    return [...arrayAuxiliar1, ...arrayAuxiliarComZeros]
}

const array: number[] = [1,2,0,4,3,0,5,6,7,8,0,4,3,6,0]

console.log(moverZeros(array))

function gerarArrayAleatorio(tamanho: number, valorMinimo:number, valorMaximo: number):number[] {
  return Array.from({ length: tamanho }, () => 
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
  );
}


console.log(gerarArrayAleatorio(5, 0, 100)); 


let i = 0

while (i < 99999) {
    console.log(moverZeros(gerarArrayAleatorio(999999, 0, 50)))
    console.log(moverZeros(gerarArrayAleatorio(999999, 0, 50)))
    console.log(moverZeros(gerarArrayAleatorio(999999, 0, 50)))
    console.log(moverZeros(gerarArrayAleatorio(999999, 0, 50)))
    console.log(moverZeros(gerarArrayAleatorio(999999, 0, 50)))
    i++;
}

export {}