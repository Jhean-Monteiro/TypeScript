/* 
O desafio: crie uma função processarEntrada que recebe um parâmetro do tipo unknown e:

Se for string → retorna "Texto: <valor em maiúsculo>"
Se for number → retorna "Número: <valor vezes 2>"
Se for outra coisa → retorna "Tipo não suportado"
*/

function processarEntrada(valor: unknown): unknown {
    const dobro = (valor as number)*2

    
    if (typeof valor === "number") {
        return dobro
    } else if (typeof valor === "string") {
        const upper = (valor as string).toUpperCase()
    
        return upper
    }

    return "Tipo não suportado"
}

console.log(processarEntrada("jhean"))

console.log(processarEntrada(20))

console.log(processarEntrada(true))