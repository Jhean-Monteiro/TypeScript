function capitalizarFrase(frase: string): string {
    let arr = frase.split(" ");
    let arrAuxiliar: string[] = []
    for (let i of arr) {
        i = i.charAt(0).toUpperCase() + i.slice(1)
        arrAuxiliar.push(i)
    }
    
    let str: string = ""
    for (let palavra of arrAuxiliar) {
        str = str + palavra + " "
    }

    return str
}


console.log(capitalizarFrase("o rato roeu a roupa")); 
// Deve exibir: "O Rato Roeu A Roupa"

console.log(capitalizarFrase("typescript é muito bom")); 
// Deve exibir: "Typescript É Muito Bom"