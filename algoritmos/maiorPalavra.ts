function encontrarMaiorPalavra(frase: string): string {
    const arr = frase.split(" ",)


    let maiorPalavra = ""
    arr.forEach(p => {
        if (p.length > maiorPalavra.length) {
            maiorPalavra = ""
            maiorPalavra = p
        }
    })
    
    return maiorPalavra
}


console.log(encontrarMaiorPalavra("Aprender TypeScript é muito divertido")); 
// Deve exibir: "TypeScript"

console.log(encontrarMaiorPalavra("Foco no objetivo")); 
// Deve exibir: "objetivo"

console.log(encontrarMaiorPalavra("Cachorro quente")); 
// Deve exibir: "Cachorro"