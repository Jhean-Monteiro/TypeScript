function retornaMaiorEMenorNumero(lista: number[]): string {
    let menor = lista[0];
    let maior = lista[0];
    
    lista.forEach(n => {
        if (n >= maior) {
            maior = n;
        } 
        if (n < menor) {
            menor = n
        }
    })
    return `Maior numero: ${maior} & Menor numero: ${menor}`
}

console.log(retornaMaiorEMenorNumero([3,5,7,10,1,4,6,7,8]))