// Type Predicate


// 'quando o retorno for true, o typescript infere que o valor é um numero'
function isNumber(value: unknown): value is number {
    return typeof value === "number"
}

console.log(isNumber("1"))

function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(value) && isNumber(sum)) {
            return sum + value
        }
        return sum
    }, 0)

    return retorno
}

console.log(soma(1,2,3))
console.log(soma("1","2","3"))

console.log(soma([1,2,3,"4", "5", 6]))