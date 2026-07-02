const dadosCliente: [number, string] = [1, "jhean"]
const dadosCliente2: [number, string, string?] = [1, "jhean", "Monteiro"]
const dadosCliente3: readonly [number, string, ...string[]] = [1, "jhean", "Monteiro", "silva"]

dadosCliente[0] = 2
dadosCliente[1] = "Jhean Monteiro"

console.log(dadosCliente)
console.log(dadosCliente2)
console.log(dadosCliente3)


// dadosCliente3.pop() (a palavra readonly tornou a tupla imutável)

const array: readonly string[] = ["J", "H", "E", "A", "N"] // array imutável