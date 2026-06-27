function achatar(arr: number[][]): number[] {

    let novoarray: number[] = [];
    for (let n of arr) {
        n.forEach(n2 => {
            novoarray.push(n2)
        })
    }

    return novoarray;
}

const arr = [[1,2,3], [1,2,3], [1,2,3]]

console.log(achatar(arr))


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
export {}