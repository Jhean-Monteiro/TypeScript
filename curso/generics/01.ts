type FilterCallback = (
    value: unknown, 
    index?: number, 
    array?: unknown[]
) => boolean

function meuFilter(array: unknown[], callbackFn: FilterCallback) {
    const novoArray = []

    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i])) {
            novoArray.push(array[i])
        }
    }

    return novoArray
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayFiltradoOriginal = array.filter((value) => value < 5)
console.log(arrayFiltradoOriginal)

// ========= teste da funcao =======
const arrayFiltrado = meuFilter(array, (value) => {
    if (typeof value === "number") {
        return value < 5
    }
    return false
})
export{}