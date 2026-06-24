function twoSum(numeros: number[], alvo: number): number[] {

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) { // evita que i e j comparem suas posições iguais
            if(numeros[j]! + numeros[i]! === alvo && i !== j) { // essa linha evita que indices iguais [1, 1] sejam sonsiderados (desnecessário após a versão final, mas resolvi deixar aqui)
                return [i, j]
            }
        }
    }

    return [-1] // caso não tenha um resultado
    
}


console.log(twoSum([2, 7, 11, 15], 9));  // Deve exibir: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Deve exibir: [1, 2]
console.log(twoSum([3, 3], 6));          // Deve exibir: [0, 1]
console.log(twoSum([1, 3, 2], 6));