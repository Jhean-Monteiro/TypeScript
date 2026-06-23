function contarVogais(texto: string): number {
    texto = texto.toLocaleLowerCase()

    const arrTexto = texto.split("",);

    let vogais = 0;

    arrTexto.forEach(n => {
        if (n === "e" || n === "a" || n === "i" || n === "o" || n === "u") {
            vogais++;
        }
    })

    return vogais
}


console.log(contarVogais("computador")); // Deve exibir: 4
console.log(contarVogais("banana"));     // Deve exibir: 3
console.log(contarVogais("Abacaxi"));    // Deve exibir: 4
console.log(contarVogais("xyz"));        // Deve exibir: 0