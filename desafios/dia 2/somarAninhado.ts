type Lista = (Lista | number)[]

function somarAninhado(lista: Lista): number {
    let contador = 0
    lista.forEach(el => {
        if (typeof el !== "number") {
            contador += somarAninhado(el)
        } else {
            contador += el
        }
    })
    return contador
}

let aninhado: Lista = [1, [2, 3], [4, [5, 6]]]

console.log(somarAninhado(aninhado))