type Aninhado = (number | Aninhado)[]

function achatar(arr: Aninhado): number[] {
    let resultado: number[] = []

    for (const item of arr) {
        if (Array.isArray(item)) {
            resultado.push(...achatar(item)) 
        } else {
            resultado.push(item)
        }
    }

    return resultado
}

console.log(achatar([1, [2, [3, [4, 5]]], 6])) 

const q: Aninhado = [1, [1,2, [4,5, [4]], [1,3], 1,2, 3], [1,4,5], 9]
console.log(achatar(q))

/*
function gerarArrayAleatorio(tamanho: number, valorMinimo:number, valorMaximo: number):number[] {
  return Array.from({ length: tamanho }, () => 
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
  );
}

let i = 0;

while (i < 99999) {
    const arr1 = [gerarArrayAleatorio(100000, 0, 3000), gerarArrayAleatorio(100000, 0, 3000), gerarArrayAleatorio(100000, 0, 3000),]

    console.log(achatar(arr1))
    
    i++;
}
export {} */