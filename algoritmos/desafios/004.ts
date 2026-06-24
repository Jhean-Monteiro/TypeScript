type Forma = "circulo" | "quadrado" | "triangulo"

const descreverForma = (forma: Forma): string => {
    if (forma === "circulo") return "Circulo: tem 1 lado curvo"
    if (forma === "quadrado") return "Quadrado: tem 4 lados iguais"
    return "Triangulo: tem 3 lados"
}

console.log(descreverForma("circulo"))
console.log(descreverForma("quadrado"))
console.log(descreverForma("triangulo"))
