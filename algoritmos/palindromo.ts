function ehPalindromo(palavra: string): boolean {

    palavra = palavra.toLocaleLowerCase()
    let arrStr = palavra.split("",)
    let arrReverso = palavra.split("",).reverse()

    let temQueSerVerdadeiro = true;

    
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === arrReverso[i]) {
            temQueSerVerdadeiro = true
        } else {
            return false
        }
    }

    return temQueSerVerdadeiro
    
}

console.log(ehPalindromo("radar"));      // Deve exibir: true
console.log(ehPalindromo("ovo"));        // Deve exibir: true
console.log(ehPalindromo("banana"));     // Deve exibir: false
console.log(ehPalindromo("Arara"));      // Dica: trate as letras maiúsculas/minúsculas!