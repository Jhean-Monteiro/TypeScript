function palindromo(palavra: string): boolean {
    const arrAuxiliar = palavra.toLocaleLowerCase().split(/[\s,-]+/).join("")
    console.log(arrAuxiliar)
    let retornavel:boolean = false

    let j = arrAuxiliar.length-1
    for (let i = 0; i < arrAuxiliar.length; i++) {
        if (arrAuxiliar[i] === arrAuxiliar[j]) {
            retornavel = true
        } else {
            retornavel = false
            return retornavel
        }
        j--
    }

    return retornavel
}

console.log(palindromo("jhean"))
console.log(palindromo("Arara"))
console.log(palindromo("boboca"))
console.log(palindromo("hannah"))
console.log(palindromo("string"))
console.log(palindromo("subi no onibus"))
console.log(palindromo("Socorram-me, subi no onibus em Marrocos"))
console.log(palindromo("Saippuakivikauppias"))
console.log(palindromo("A man, a plan, a canal, Panama"))
console.log(palindromo("Tattarrattat"))