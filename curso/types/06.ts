// Encadeamento opcional e operador de coalescencia nula

type Documento = {
    titulo: string,
    texto: string
    data?: Date
}

const documento: Documento = {
    titulo: "O Titulo",
    texto: "O texto",
};

console.log(documento.data?.toDateString() ?? "existe data")

let teste = null
let teste2 = undefined
console.log(teste ?? "não existe")
console.log(teste2 ?? "kkkk")