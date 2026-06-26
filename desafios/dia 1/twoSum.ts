function twoSum(arr: number[], alvo: number): number[] {
    let auxiliar = [...arr]
    for (let i = 0; i < auxiliar.length; i++) {

        for (let j = i+1; j < auxiliar.length; j++) {
            if (auxiliar[j] + auxiliar[i] === alvo) {
                return [i, j]
            }
        }
    }


    return []
}

console.log(twoSum([1,2,3,5], 6))
console.log(twoSum([1,2,3], 4))
console.log(twoSum([1,2,3,5,6], 9))